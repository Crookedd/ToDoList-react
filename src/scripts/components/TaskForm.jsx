import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import ErrorModal from "../modals/ErrorModal";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !about) {
      setShowErrorModal(true);
      return;
    }
    const newTask = { id: Date.now(), title, about };
    dispatch(addTask(newTask));
    setTitle("");
    setAbout("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="header">
        <div className="text_container">
          <input
            type="text"
            className={`input title ${!title ? 'error' : ''}`}
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className={`input about ${!about ? 'error' : ''}`}
            placeholder="About..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <button type="submit" className="add_button">+</button>
      </form>
      {showErrorModal && (
        <ErrorModal
          message="Заполните оба поля!"
          onConfirm={() => setShowErrorModal(false)}
        />
      )}
    </>
  );
};

export default TaskForm;
