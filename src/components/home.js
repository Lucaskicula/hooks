import React, { useState } from 'react';
import TaskForm from '../components/taskform';
import TaskList from '../components/tasklist';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;