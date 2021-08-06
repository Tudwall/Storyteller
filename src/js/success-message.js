const message = (messageContent, chapterEnd) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  const message = document.createElement("p");
  message.textContent = messageContent;

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Continue";

  if (chapterEnd) {
    nextBtn.addEventListener("click", chapterEnd);
  } else {
    nextBtn.addEventListener("click", () => {
      messageContainer.remove();
    });
  }

  messageContainer.append(message, nextBtn);

  return messageContainer;
};

export { message };
