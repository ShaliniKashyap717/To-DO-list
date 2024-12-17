import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Todo = ({task, deleteToDo, editToDo}) => {
  const notify = () => toast("Woohoo! Task completed!");
  let [status, setStatus]=useState(false);
  let checkStatus=()=>{
    setStatus(!status);
    notify();
  }

  return (
    <div className='Todo'>
      <ToastContainer/>
      <ul className='listFormed'>
      
        <li className={status ? 'completed' : ''} onClick={checkStatus} >
        <p> &ensp; {task.task}  &emsp;
          <span>
          <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editToDo(task.id)}/> &ensp;
          <FontAwesomeIcon icon={faTrash} onClick={()=>deleteToDo(task.id)}/>  &ensp;
          </span>
         
          </p>
        </li>
      </ul>

    </div>
  )
}
