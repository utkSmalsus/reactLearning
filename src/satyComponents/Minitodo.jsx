import React from 'react';
import { useState } from 'react';
//import React, { useState } from "react";

function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h2>Mini Todo App</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() =>
              setTasks(tasks.filter((_, i) => i !== index))
            }>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;


