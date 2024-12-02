import React from "react";

const ErrorModal = ({ message, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <p>{message}</p>
        <div className="modal_buttons">
          <button className="confirm_button" onClick={onConfirm}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
