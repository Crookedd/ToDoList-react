import React, { useState } from 'react';
import ShareImg from '../../images/share.svg';
import EditImg from '../../images/edit.svg';
import InfoImg from '../../images/inf.svg';

const ButtonContainer = ({ task, isVisible, onEdit, onShare  }) => {

  return (
    <div
      className="button_container"
    >
      {isVisible && (
        <>
          <button className="action_button" onClick={onShare}>
            <img src={ShareImg} alt="Share" />
          </button>
          <button className="action_button" onClick={onEdit}>
            <img src={EditImg} alt="Edit" />
          </button>
          <button className="action_button">
            <img src={InfoImg} alt="Info" />
          </button>
        </>
      )}
    </div>
  );
};

export default ButtonContainer;