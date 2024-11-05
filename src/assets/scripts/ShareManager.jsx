import React from 'react';

const ShareManager = ({ task, onClose }) => {
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
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <h2>Поделиться задачей</h2>
        <button onClick={copyTaskToClipboard}>Скопировать в буфер обмена</button>
        <button onClick={shareOnTelegram}>Поделиться в Telegram</button>
        <button onClick={shareOnWhatsApp}>Поделиться в WhatsApp</button>
        <button onClick={shareOnVK}>Поделиться в VK</button>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ShareManager;