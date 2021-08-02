const message = (chapterEnd) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  const message = document.createElement("p");
  message.textContent =
    "Congratulations, shape fits correctly! Now you can continue your story.";

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Continue";
  nextBtn.addEventListener("click", chapterEnd);

  messageContainer.append(message, nextBtn);

  return messageContainer;
};

export { message };
