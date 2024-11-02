import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;