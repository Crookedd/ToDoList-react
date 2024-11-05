import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import ConfirmationModal from './ConfirmationModal';
import { loadTasks, saveTasks } from './localStorage';
import '../styles/main.scss';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskDiv, setTaskDiv] = useState(null);

  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (id, taskDiv) => {
    setTaskToDelete(id);
    setTaskDiv(taskDiv);
    setModalOpen(true);
  };

  const confirmDeleteTask = () => {
    const updatedTasks = tasks.filter(task => task.id !== taskToDelete);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setModalOpen(false);
  };

  const cancelDeleteTask = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      {isModalOpen && (
        <ConfirmationModal
          onConfirm={confirmDeleteTask}
          onCancel={cancelDeleteTask}
        />
      )}
    </div>
  );
};

export default App; 