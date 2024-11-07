import React from 'react';
import CopyImg from '../../images/copy.svg';
import VKImg from '../../images/vk.svg';
import TelegramImg from '../../images/telegram.svg';
import WhatsAppImg from '../../images/whats.svg';
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
          <img src={CopyImg} alt="Copy" />
          </button>
          <button className="share_button" onClick={shareOnVK}>
          <img src={VKImg} alt="VK" />
          </button>
          <button className="share_button" onClick={shareOnTelegram}>
            <img src={TelegramImg} alt="Telegram" />
          </button>
          <button className="share_button" onClick={shareOnWhatsApp}>
          <img src={WhatsAppImg} alt="WhatsApp" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;