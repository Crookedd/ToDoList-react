import React from 'react';

const ShareModal = ({ task, onClose }) => {
  const copyTaskToClipboard = () => {
    const taskText = `Задача: ${task.title}\nОписание: ${task.about}`;
    navigator.clipboard.writeText(taskText)
      .then(() => {
        alert("Задача скопирована в буфер обмена!");
      })
      .catch(err => {
        console.error("Ошибка при копировании: ", err);
      });
  };

  const shareOnTelegram = () => {
    const url = encodeURIComponent(`Задача: ${task.title}\nОписание: ${task.about}`);
    window.open(`https://t.me/share/url?url=${url}`, "_blank");
  };

  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(`Задача: ${task.title}\nОписание: ${task.about}`);
    window.open(`https://wa.me/?text=${url}`, "_blank");
  };

  const shareOnVK = () => {
    const url = encodeURIComponent(`Задача: ${task.title}\nОписание: ${task.about}`);
    window.open(`https://vk.com/share.php?url=${url}`, "_blank");
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="edit_modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="share_buttons">
          <button className="share_button" onClick={copyTaskToClipboard}>
            <img src="../images/copy.svg" alt="Copy" />
          </button>
          <button className="share_button" onClick={shareOnVK}>
            <img src="../images/vk.svg" alt="VK" />
          </button>
          <button className="share_button" onClick={shareOnTelegram}>
            <img src="../images/telegram.svg" alt="Telegram" />
          </button>
          <button className="share_button" onClick={shareOnWhatsApp}>
            <img src="../images/whats.svg" alt="WhatsApp" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;