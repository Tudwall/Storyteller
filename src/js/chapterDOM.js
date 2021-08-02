import { makeDraggable, makeDroppable } from "./drag-drop";

const createChapterStructure = (chapterObj, callback, displayHome) => {
  let section;

  const hideStoryContent = () => {
    const story = document.querySelector("p");
    const images = document.querySelector(".images");
    const nextButton = document.querySelector(".next");
    const question = document.querySelector(".question");

    story.classList.toggle("hide");
    images.classList.toggle("hide");
    nextButton.classList.toggle("hide");
    question.classList.toggle("hide");
  };

  const createButtons = () => {
    const homeButton = document.createElement("button");
    const nextChapterButton = document.createElement("button");

    homeButton.textContent = "home";
    homeButton.classList.add("home");

    homeButton.addEventListener("click", displayHome);

    nextChapterButton.textContent = "Next";
    nextChapterButton.classList.add("next");
    nextChapterButton.addEventListener("click", hideStoryContent);

    return { homeButton, nextChapterButton };
  };

  const setupImages = () => {
    const images = chapterObj.getImages();
    const gallery = document.createElement("div");

    gallery.className = "images";

    for (let image of images) {
      const classArr = image.cssClass.split(" ");

      const picture = document.createElement("img");
      picture.src = image.url;
      picture.classList.add(classArr[0]);
      picture.classList.add(classArr[1]);

      if (picture.className !== "drop-container") {
        makeDraggable(picture, section);
      }

      gallery.append(picture);
    }

    makeDroppable(
      gallery.querySelector(".right"),
      gallery.querySelector(".drop-container"),
      () => callback(chapterObj)
    );

    return gallery;
  };

  const setupChapterPage = () => {
    section = document.createElement("section");
    const { homeButton, nextChapterButton } = createButtons();
    const story = document.createElement("p");
    const question = document.createElement("p");
    const images = setupImages();

    question.className = "question";
    question.classList.add("hide");
    images.classList.add("hide");

    story.textContent = chapterObj.getStory();
    question.textContent = chapterObj.getQuestion();

    section.append(homeButton, nextChapterButton, story, question, images);

    return section;
  };

  return setupChapterPage();
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
