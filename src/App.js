import './App.css';
import React, { useEffect, useState } from 'react';
import List from './components/List.jsx'
import Item from './components/Item'
import Form from './components/Form.jsx'


const App = () => {

  const [items, setItems] = useState([]);
  const SAVED_ITEMS = 'savedItems'
  
  useEffect(()=>{
    let savedItems =JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems){
      setItems(savedItems)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  },[items])


  function onAddItem(text){

    let newItem = new Item(text);

    setItems([...items, newItem])
  }

  function onItemDeleted(item){
    let filterItem = items.filter(obj => obj.id !== item.id)

    setItems(filterItem)
  }


  function onDone(item){
    let updatedItems = items.map(it=>{
      if(it.id === item.id){
        it.done = !it.done
      }
      return it;
    })
    setItems(updatedItems)
  }
  
  return ( 
    <div className = 'container'>
      <h1 className='app-title'>Todo List</h1>
      <Form onAddItem = {onAddItem}></Form>
      <List onDone = {onDone} onItemDeleted={onItemDeleted} items = {items}></List>

    </div>
   );
}

export default App;


