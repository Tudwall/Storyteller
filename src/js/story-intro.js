import { Story } from "./story-factory";

const storyIntro = (Story) => {
  const title = document.createElement("h2");
  title.id = "title";
  title.textContent = Story.getTitle;

  const intro = document.createElement("p");
  intro.id = "intro";
  intro.textContent = Story.getIntro;

  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.textContent = "Play this story";

  const container = document.createElement("div");
  container.id = "container";

  container.appendChild(title);
  container.appendChild(intro);
  container.appendChild(nextBtn);

  return container;
};

/* If the story needs one, there can be an intro written in the story object
and this function will display it */

export { storyIntro };
