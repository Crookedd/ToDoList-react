import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const EditTaskModal = ({ task, onSave, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [about, setAbout] = useState(task.about);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !about) {
      setShowErrorModal(true);
      return;
    }
    onSave({ ...task, title, about });
    onCancel();
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <div className="modal">
        <div className="edit_modal_content">
          <div className="text_container">
            <input
              type="text"
              className="input mini_input mb-12"
              placeholder="Mini input..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="textarea max_input"
              rows="15"
              placeholder="Max input..."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="edit_modal_buttons">
            <button className="cancel_button" onClick={onCancel}>
              Cancel
            </button>
            <button className="save_button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
      {showErrorModal && (
        <ErrorModal
          message="Заполните оба поля!"
          onConfirm={handleCloseErrorModal}
          onCancel={handleCloseErrorModal}
        />
      )}
    </>
  );
};

export default EditTaskModal;