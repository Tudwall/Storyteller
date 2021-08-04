const startingPage = (renderFunction, HtPRenderFunction, renderChapterIndexFn) => {
  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "Storyteller";

  const desc = document.createElement("p");
  desc.id = "description";
  desc.textContent =
    "Dive into an unforgettable story experience. Be part of the story.";

  const startGameBtn = document.createElement("button");
  startGameBtn.id = "start-game-button";
  startGameBtn.classList.add("home-button");
  startGameBtn.textContent = "Start game";
  startGameBtn.addEventListener("click", renderFunction);

  const HtPBtn = document.createElement("button");
  HtPBtn.id = "how-to-play-button";
  HtPBtn.classList.add("home-button");
  HtPBtn.textContent = "How to play";
  //HtPBtn.addEventListener("click", HtPRenderFunction);

  const mainMenu = document.createElement("div");
  mainMenu.id = "main-menu";

  const chaptersButton = document.createElement("button");
  chaptersButton.textContent = "Chapters";
  chaptersButton.id = "chaptersIndex-button"
  chaptersButton.classList.add("home-button");
  chaptersButton.addEventListener("click", renderChapterIndexFn);

  mainMenu.appendChild(title);
  mainMenu.appendChild(desc);
  mainMenu.appendChild(startGameBtn);
  mainMenu.appendChild(HtPBtn);
  mainMenu.appendChild(chaptersButton);

  return mainMenu;
};

export { startingPage };
