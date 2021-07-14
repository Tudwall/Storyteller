import { makeDraggable, makeDroppable } from "./drag-drop";

//Chapter factory
const Chapter = (story, images, question, chapterNumber) => {
  let completed = false;

  const changeStatus = () => (completed = !completed);
  const getStatus = () => completed;

  return { story, images, question, chapterNumber, changeStatus, getStatus };
};

//Chapter DOM structure
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
    const images = [...chapterObj.images];
    const gallery = document.createElement("div");

    for (let image of images) {
      const picture = document.createElement("img");

      picture.src = image.url;
      picture.classList.add(image.cssClass);
      picture.style.height = "100px";
      picture.style.width = "100px";

      if (image.cssClass !== "drop-container") {
        makeDraggable(picture);
      }

      gallery.append(picture);
    }

    makeDroppable(
      //Selector for correct picture,
      gallery.querySelector(".drop-container")
      //callback
    );

    return gallery;
  };

  const setupChapterPage = () => {
    const section = document.createElement("section");
    const { homeButton, nextChapterButton } = createButtons();
    const story = document.createElement("p");
    const question = document.createElement("p");
    const images = setupImages();

    story.textContent = chapterObj.story;
    question.textContent = chapterObj.question;

    section.append(homeButton, nextChapterButton, story, question, images);

    return section;
  };

  return { setupChapterPage };
};

export { Chapter, createChapterStructure };

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
