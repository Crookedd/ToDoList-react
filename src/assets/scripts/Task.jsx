import React, { useRef } from 'react';

const Task = ({ task, deleteTask }) => {
  const taskDiv = useRef(null);

  const handleDelete = () => {
    deleteTask(task.id, taskDiv.current);
  };

  return (
    <div className="task" data-id={task.id} ref={taskDiv}>
      <div className="text-container">
        <div className="title">{task.title}</div>
        <div className="about">{task.about}</div>
      </div>
      <button className="delete_button" onClick={handleDelete}>
        &times;
      </button>
    </div>
  );
};

export default Task;