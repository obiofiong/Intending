import React, {useState} from 'react'
import '../App.css'
import { FiEdit } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import TodoForm from './TodoForm';

// FiEdit
// TiDelete
function TodoItem(props) {
    // editCheck variable is to check if the edit button is clicked
    const [editCheck, setEditCheck] = useState(false)

    const handleComplete = () => {
        props.handleComplete(props.todo.id)
    }
    const handleDelete = () => {
        props.handleDelete(props.index)
    }
    const handleEditForm = () => {
        // We set the edit check variable to true so as to run the edit todo-form within the return statement
        setEditCheck(true)
    }
    const handleEdit =(edited)=>{
        // pass the edited text input to the todolist function to update the TODOS array
        // We must pass it with the particular todo index
        
        props.handleEdit(props.index, edited.title)

        // we must reset our editCheck variable to false since id has completed its job
        setEditCheck(false)

    }

    return (
        <>
            { editCheck === true ?
                (<TodoForm 
                    classNameStyle = "edit-todo"
                    onSubmit = {handleEdit}
                    placeholder = "Edit your Intent"
                    btnName = "Edit Intent"
                />) : 
                
                <li className = {props.todo.completed ? "todo-completed" : ""}>
                    <p onClick = {handleComplete}> {props.todo.title} </p>
                    <div>
                        <span onClick = {handleEditForm} className = "icon-btn" ><FiEdit className = "icon-edit"/></span>
                        <span onClick = {handleDelete} className = "icon-btn" ><TiDelete className = "icon-del"/></span>
                    </div>
                </li>
            }
        </>
    )
}

export default TodoItem
