import React, { useState } from 'react';
import { showShareModal } from './shareManager'; // Импортируйте функции для обработки

const ButtonContainer = ({ task, taskDiv }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="button_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <>
          <button
            className="action_button"
            onClick={() => showShareModal(task)}
          >
            <img src="../assets/images/share.svg" alt="Share" />
          </button>
          <button className="action_button">
            <img src="../assets/images/inf.svg" alt="Info" />
          </button>
          <button className="action_button">
          <img src="../assets/images/edit.svg" alt="Edit" />
          </button>
        </>
      )}
    </div>
  );
};

export default ButtonContainer;