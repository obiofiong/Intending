import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import React, {useState} from 'react'
import { FaListAlt } from 'react-icons/fa';


function App() {
  const [todos, setTodos] = useState([])
  // const [error, setError] = useState("")
  
  const formOnSubmit = (todo) => {
    if(todo.title === ""){
      alert("Input cannot be empty")
    }
    else{
      setTodos([todo, ...todos])
      // setError(true) 
    }
    
  }

  return (
    <div className ="App">
    <div className="todo-app">
      <div className = "header">
     <h1>  <FaListAlt className = "logo"/> INTENDING</h1>
        <p>(A Todo App)</p>
      </div>
        {/* <p className = {if (error == "" "no-error-message" : "error-message"}> {error} </p> */}
        <TodoForm  
          onSubmit = {formOnSubmit}
          classNameStyle = "todo-form"
          placeholder = "What do you intend TO DO?"
          btnName = "Add Intent"
        />
        <TodoList 
          todos = {todos} 
          updateTodos = {setTodos}
        />
      </div>
    </div>
  );
}

export default App;
