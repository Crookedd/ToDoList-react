import React, { useState } from 'react';
import EditTaskModal from './EditTaskModal';
import ShareModal from './ShareManager';

const ButtonContainer = ({ task, updateTask }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [about, setAbout] = useState(task.about);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleSave = () => {
    updateTask({ ...task, title, about });
    setIsEditing(false);
  };

  return (
    <div
      className="button_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <>
          <button className="action_button" onClick={() => setIsSharing(true)}>
            <img src="../assets/images/share.svg" alt="Share" />
          </button>
          <button className="action_button" onClick={() => setIsEditing(true)}>
            <img src="../assets/images/edit.svg" alt="Edit" />
          </button>
        </>
      )}
      {isEditing && (
        <EditTaskModal 
          task={task} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
          setTitle={setTitle}
          setAbout={setAbout}
        />
      )}
      {isSharing && (
        <ShareModal 
          task={task} 
          onClose={() => setIsSharing(false)} 
        />
      )}
    </div>
  );
};

export default ButtonContainer;