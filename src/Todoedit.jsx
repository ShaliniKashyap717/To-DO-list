import React, { useState } from 'react';
export const Todoedit = ({ editToDo, task }) => {
  let [value, setValue] = useState(task.task);

  let handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      editToDo(task.id, value); 
    }
  };

  return (
    <form className='Todoform' onSubmit={handleSubmit}>
      <div className='together'>
        <input
          type='text'
          className='todo-input'
          placeholder='Update Task'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type='submit' className='todo-btn'>Update Task</button>
      </div>
    </form>
  );
};


