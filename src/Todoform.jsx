
import React, { useState } from 'react';

export const Todoform = ({ addToDo }) => { // Destructure `addToDo` correctly
  let [value, setValue] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) { // Check if the value is not empty
      addToDo(value);
      setValue("");
    }
  };

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
    <div className='together'>

    <input 
        type='text' 
        className='todo-input' 
        placeholder='What do we have to do today?'
        value={value} 
        onChange={(event) => setValue(event.target.value)} // Corrected onChange handler
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </div>
   
    </form>
  );
};

