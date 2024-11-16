import React from "react";
import CopyImg from "/src/assets/images/copy.svg";
import VKImg from "/src/assets/images/vk.svg";
import TelegramImg from "/src/assets/images/telegram.svg";
import WhatsAppImg from "/src/assets/images/whats.svg";

const ShareModal = ({ task, onClose }) => {

  const shareLinks = [
    {
      name: "Копировать",
      image: CopyImg,
      onClick: () => copyTaskToClipboard(task),
    },
    {
      name: "VK",
      image: VKImg,
      onClick: () => shareOnSocialMedia(task, "https://vk.com/share.php?url="),
    },
    {
      name: "Telegram",
      image: TelegramImg,
      onClick: () => shareOnSocialMedia(task, "https://t.me/share/url?url="),
    },
    {
      name: "WhatsApp",
      image: WhatsAppImg,
      onClick: () => shareOnSocialMedia(task, "https://wa.me/?text="),
    },
  ];

  const shareOnSocialMedia = (task, baseUrl) => {
    const url = encodeURIComponent(
      `Задача: ${task.title}\nОписание: ${task.about}`
    );
    window.open(`${baseUrl}${url}`, "_blank");
  };

  const copyTaskToClipboard = (task) => {
    const taskText = `Задача: ${task.title}\nОписание: ${task.about}`;
    navigator.clipboard
      .writeText(taskText)
      .then(() => {
        alert("Задача скопирована в буфер обмена!");
      })
      .catch((err) => {
        console.error("Ошибка при копировании: ", err);
      });
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="edit_modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="share_buttons">
          {shareLinks.map((link, index) => (
            <button
              key={index}
              className="share_button"
              onClick={link.onClick}
            >
              <img src={link.image} alt={link.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
