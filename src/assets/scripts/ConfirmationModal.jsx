import React from 'react';

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div id="confirmationModal" className="modal">
      <div className="modal_content">
        <h4>Удалить эту задачу?</h4>
        <div className="modal_buttons">
          <button className="confirm_button" onClick={onConfirm}>Да</button>
          <button className="cancel_button" onClick={onCancel}>Нет</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;