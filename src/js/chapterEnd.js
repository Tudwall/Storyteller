import { render } from "./render";

//quiz will be a node that can be embedded into chapter end page.

//I removed quiz parameter because game logic takes care of properly displaying quiz after all chapters are completed
const createChapterEnd = (chapterNumber, nextPage, displayHome) => {
  const base = document.createElement("div");
  base.setAttribute("id", "chapter-end");

  const text = document.createElement("p");
  text.textContent = `Chapter ${chapterNumber} complete!`;

  const nextButton = document.createElement("button");
  nextButton.textContent = `Next Chapter`;
  nextButton.addEventListener("click", () => {
    render(nextPage);
  });

  const homeButton = document.createElement("button");
  homeButton.textContent = `Back To Home`;
  homeButton.classList.add("home");
  homeButton.addEventListener("click", displayHome);

  base.appendChild(text);
  //need to implement quiz later.
  base.appendChild(nextButton);
  //base.appendChild(restartButton);

  return base;
};

export { createChapterEnd };
