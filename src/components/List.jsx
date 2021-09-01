import React from 'react';
import './List.css'

function List(props){
    return (
      <ul>
        {props.items.map(item => 
        <li key = {item.id} className = {item.done?'list-item-done':'list-item'} >
          <button className = {item.done?'done':'undone'} onClick={()=>{props.onDone(item)}}></button>
          {item.text}
          <button className='btn-list' onClick = {()=>{props.onItemDeleted(item)}}>
            Del
            </button>
        </li>)}
      </ul>
    )
  }

export default List;