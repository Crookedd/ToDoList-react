import React, { useState, useRef } from 'react';
import ButtonContainer from './ButtonContainer';
import EditTaskModal from './EditTaskModal';
import ShareModal from './ShareModal';

const Task = ({ task, deleteTask, updateTask}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const taskDiv = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExpanded(false);
  };

  const handleDelete = () => {
    deleteTask(task.id, taskDiv.current);
  };

  const handleEdit = (updatedTask) => {
    updateTask(updatedTask);
    setEditModalOpen(false);
  };

  

  return (
    <div
      className={`task ${isExpanded ? 'expanded' : ''}`}
      data-id={task.id}
      ref={taskDiv}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-container">
        <div className="title">{task.title}</div>
        <div className="about">{task.about}</div>
      </div>
      <button className="delete_button" onClick={handleDelete}>
        &times;
      </button>
      {isHovered && (
        <ButtonContainer
          task={task}
          isVisible={isHovered}
          onEdit={() => setEditModalOpen(true)}
          onShare={() => setShareModalOpen(true)}
        />
      )}
      {isEditModalOpen && (
        <EditTaskModal
          task={task}
          onSave={handleEdit}
          onCancel={() => setEditModalOpen(false)}
        />
      )}
      {isShareModalOpen && (
        <ShareModal
          task={task}
          onClose={() => setShareModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Task;