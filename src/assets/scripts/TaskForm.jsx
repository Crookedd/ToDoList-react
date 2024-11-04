import { useState } from 'react';
import '../styles/main.scss';

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
    <form onSubmit={handleSubmit}>
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
      <button type="submit" className="add_button">+</button>
    </form>
  );
};

export default TaskForm;