const message = (chapterEnd, messageContent) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  const message = document.createElement("p");
  message.textContent = messageContent;

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Continue";
  nextBtn.addEventListener("click", chapterEnd);

  messageContainer.append(message, nextBtn);

  return messageContainer;
};

export { message };
