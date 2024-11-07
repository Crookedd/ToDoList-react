import React from 'react';

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div id="confirmationModal" className="modal">
      <div className="modal_content">
        <h4>Delete this task?</h4>
        <div className="modal_buttons">
          <button className="confirm_button" onClick={onConfirm}>Yes</button>
          <button className="cancel_button" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;