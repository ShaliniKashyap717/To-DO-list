import React, { useState } from 'react';
import { Todoform } from './Todoform';
import { v4 as uuidv4 } from 'uuid'; // Correct the import to `uuidv4`
import { Todo } from './Todo';
import { Todoedit } from './Todoedit';

export const Todowrapper = () => {
  let [todos, setTodos] = useState([]); // Destructure `useState` correctly

  let addToDo = (todo) => {
    
   let isDuplicate = todos.some((existingTodo) => existingTodo.task === todo);
    
    if (isDuplicate) {
      alert("Task already exists");
    }
     else {
      setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }
      ]);
    }
  };

  let deleteToDo= (id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  };


  let editToDo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isEditing: true} : todo
    ));
  };
  

  // let editTask=(id, task)=>{
  //   setTodos(todos.map(todo => todo.id ===id ? 
  //     {...todo, task, isEditing: !todo.isEditing}
  //      : todo))
  // }

  let editTask = (id, updatedTask) => {
    console.log("Editing task with ID:", id, "New task value:", updatedTask);
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
    ));
    console.log("Updated todos:", todos); 
  };
  


  return (
    <div>
      <h1 className='white'>Complete all your tasks!</h1>
      <Todoform addToDo={addToDo} /> 

     
     {todos.map((todo) => (
      todo.isEditing ? 
      <Todoedit key={todo.id} editToDo={editTask} task={todo}/> :
        <Todo  task={todo} key={todo.id} deleteToDo={deleteToDo} editToDo={editToDo}  /> 
       
      ))}



    </div>
  
  );

 
};
