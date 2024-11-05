import React from 'react';

const EditTaskModal = ({ task, onSave, onCancel, setTitle, setAbout }) => {
  return (
    <div className="modal">
      <h2>Edit Task</h2>
      <input 
        type="text" 
        defaultValue={task.title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title"
      />
      <textarea 
        defaultValue={task.about} 
        onChange={(e) => setAbout(e.target.value)} 
        placeholder="About"
      />
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditTaskModal;