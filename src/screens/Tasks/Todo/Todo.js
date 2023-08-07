import React, { useState , useEffect } from 'react';
import './Todo.css'; // Import your custom CSS file

const Todo = () => {
  const [inputTask, setInputTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, inputTask]);
    setInputTask('');
  };

  const removeTask = (i) => {
    const newTaskList = taskList.filter((_, index) => index !== i);
    setTaskList(newTaskList);
  };

  const updateTask = (i) => {
    const updatedTask = prompt('Enter new task');
    if (updatedTask !== null) {
      const newTaskList = [...taskList];
      newTaskList[i] = updatedTask;
      setTaskList(newTaskList);
    }
  };




  return (
    <div className="todo-container">
      <h1>Modern Todo App</h1>
      <div className="input-container">
        <input
          value={inputTask}
          type="text"
          placeholder="Add a task"
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="task-list">
        {taskList.map((task, i) => (
          <li key={i}>
            <span>{task}</span>

            <button className="update-button" onClick={() => updateTask(i)}>
              Update
            </button>
            <button className="remove-button" onClick={() => removeTask(i)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
