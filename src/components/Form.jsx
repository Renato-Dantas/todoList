import React, {useState} from 'react';
import './Form.css'

function Form(props){

    const [text, setText] = useState("");
  
    function handleChange(event){
      let text = event.target.value;
      setText(text)
    }
  
    function addItem(event){
      event.preventDefault();
      if(text){
        props.onAddItem(text)
        setText('')
      }  
    }
  
    return(
      <form>
        <input className='input-form' onChange = {handleChange} type = 'text' value = {text} placeholder = 'Type a task here'/>
        <button className = 'btn-form' onClick = {addItem}>New</button>
    </form>
    )
  }

export default Form