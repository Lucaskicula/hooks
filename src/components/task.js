import React from 'react';

const Task = ({ title, completed }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
      {completed && <span style={{ marginLeft: '10px', color: 'green' }}>✔️</span>}
    </div>
  );
};

export default Task;