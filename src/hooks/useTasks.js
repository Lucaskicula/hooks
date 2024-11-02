// src/hooks/useTasks.js
import { useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, completed) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed,
    };
    setTasks([...tasks, newTask]);
  };

  return { tasks, addTask };
};

export default useTasks;