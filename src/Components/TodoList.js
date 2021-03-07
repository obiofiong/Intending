import React, {} from 'react'
import TodoItem from './TodoItem'
import '../App.css'

function TodoList(props) {
    const handleComplete = (id) =>{
        const updatedTodos = props.todos.map((todo) => {
            if (id === todo.id){
                todo.completed = !todo.completed
            }
            return todo
        })
        // update the local todo
        props.updateTodos(updatedTodos)
    }
    const handleDelete = (index) =>{
        const updatedDeletedTodos = [...props.todos]
        updatedDeletedTodos.splice(index,1)
        // update the local todo
        props.updateTodos(updatedDeletedTodos)
    }
    const handleEdit = (index,edit) =>{
        const editedObject = {
            id : props.todos[index].id,
            title : edit,
            completed : false,
        }
        props.todos[index] = editedObject

        props.updateTodos([...props.todos])
        
    }
    return ( ~
         
        <ul className = "todo-list">
            {props.todos.map((todo, index) => (
                    <TodoItem 
                    todo = {todo} 
                    key = {index} 
                    index = {index}
                    handleComplete ={handleComplete}
                    handleDelete = {handleDelete}
                    handleEdit = {handleEdit}
                    />
            ))}
        </ul>
    )
}

export default TodoList