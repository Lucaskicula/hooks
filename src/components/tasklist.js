// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import Task from '../components/task';
import useTasks from '../hooks/useTasks';

const TaskList = () => {
  const { tasks, addTask } = useTasks();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskCompleted, setTaskCompleted] = useState(false);

  useEffect(() => {
    console.log("Componente TaskList montado. Carregando dados iniciais...");
    // Aqui, você pode simular uma chamada a um servidor para carregar tarefas
    // ou apenas limpar algum dado anterior, se necessário.
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle, taskCompleted);
      setTaskTitle('');
      setTaskCompleted(false);
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>

      {/* Formulário para adicionar tarefas */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Título da Tarefa"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={taskCompleted}
            onChange={(e) => setTaskCompleted(e.target.checked)}
          />
          Concluída
        </label> 
        <button type="submit">Adicionar Tarefa</button>
      </form>

      {/* Lista de tarefas */}
      <div>
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;