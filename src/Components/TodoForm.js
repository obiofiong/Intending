import React, {useState} from 'react'
import '../App.css';

function TodoForm(props) {
    const [input, setInput] = useState("")

    // const [todo, setTodo] = useState({})

    const handleChange = e =>{
        setInput(e.target.value)    
    }
 
    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id : Math.floor(Math.random()*10000),
            title : input,
            completed : false,
        })
        
        setInput("");
    }

    return (
        <>
            <form onSubmit ={handleSubmit}  className = {props.classNameStyle}>
                <input type = "text" 
                placeholder = {props.placeholder}
                value = {input}
                name = "text" 
                className = "todo-input"
                onChange = {handleChange}
                />
                <button  className = "todo-button">{props.btnName}</button>
            </form> 
        </>
    )
}

export default TodoForm