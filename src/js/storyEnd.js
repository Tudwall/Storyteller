//import renderContent

//should implement a quiz in the future.

function createStoryEnd(storyTitle, quiz, displayHome) {
  const base = document.createElement("div");
  base.id = "story-end"

  const title = document.createElement("h1");
  title.id = "title"
  title.textContent = `${storyTitle}`;

  const description = document.createElement("p");
  description.id = "story-end-text"
  description.textContent = "Congratulations! You have completed the story.";

  const homeButton = document.createElement("button");
  homeButton.classList.add("back-home-button")
  homeButton.textContent = `Back To Home`;
  homeButton.classList.add("home");
  homeButton.addEventListener("click", displayHome);

  base.appendChild(title);
  base.appendChild(description);
  base.appendChild(homeButton);

  return base;
}

export { createStoryEnd };
