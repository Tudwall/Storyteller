import { makeDraggable, makeDroppable } from "./drag-drop";
import { gameLogic } from "./logic";

const createChapterStructure = (chapterObj) => {
  const createButtons = () => {
    const homeButton = document.createElement("button");
    const nextChapterButton = document.createElement("button");

    homeButton.textContent = "home";
    homeButton.classList.add("home");
    nextChapterButton.textContent = "-->";
    nextChapterButton.classList.add("next");

    return { homeButton, nextChapterButton };
  };

  const setupImages = () => {
    const images = chapterObj.getImages();
    const gallery = document.createElement("div");

    for (let image of images) {
      const picture = document.createElement("img");

      picture.src = image.url;
      picture.classList.add(image.cssClass);

      if (image.cssClass !== "drop-container") {
        makeDraggable(picture);
      }

      gallery.append(picture);
    }

    makeDroppable(
      gallery.querySelector(".right"),
      gallery.querySelector(".drop-container"),
      () => gameLogic.displayChapterEnd(chapterObj)
    );

    return gallery;
  };

  const setupChapterPage = () => {
    const section = document.createElement("section");
    const { homeButton, nextChapterButton } = createButtons();
    const story = document.createElement("p");
    const question = document.createElement("p");
    const images = setupImages();

    nextChapterButton.style.visibility = "hidden";
    story.textContent = chapterObj.getStory();
    question.textContent = chapterObj.getQuestion();

    section.append(homeButton, nextChapterButton, story, question, images);

    return section;
  };

  return { setupChapterPage };
};

export { createChapterStructure };

/********************* HOW TO USE ******************
Create new chapter using Chapter factory which takes following parameters:
1. Story - string with story for the chapter.
2. Images - array of objects. Every object should have two keys:
    a. cssClass - name of the class for img node,
    b. url - image url.
3. Question - string with question.
4. ChapterNumber - number for chapter.

After crating new chapter it should be passed as argument to createChapterStructure
that will create DOM structure for the chapter.

*/
