import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !about) {
      alert("Пожалуйста, заполните оба поля!");
      return;
    }
    const newTask = { id: Date.now(), title, about };
    addTask(newTask);
    setTitle('');
    setAbout('');
  };

  return (
    <form onSubmit={handleSubmit} className="header">
      <div className="text_container">
        <input 
          type="text" 
          className="input title" 
          placeholder="Title..." 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          className="input about" 
          placeholder="About..." 
          value={about} 
          onChange={(e) => setAbout(e.target.value)} 
        />
        </div>
        <button type="submit" className="add_button">+</button>
    </form>
  );
};

export default TaskForm;