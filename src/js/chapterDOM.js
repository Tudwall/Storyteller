import { makeDraggable, makeDroppable } from "./drag-drop";
import homeImage from "../images/styling/home.png";
import arrow from "../images/styling/arrow-right.png";

const createChapterStructure = (chapterObj, displayHome, callback) => {
  const hideStoryContent = () => {
    const story = document.querySelector(".chapter-story");
    const images = container.querySelectorAll(".picture");
    const nextContainer = document.querySelector(".next-container");
    const question = document.querySelector(".chapter-question");

    story.classList.toggle("hide");
    images.forEach((img) => img.classList.toggle("hide"));
    nextContainer.classList.toggle("hide");
    question.classList.toggle("hide");
  };

  const randomize = (range, itemNumbers) => {
    const randomIndex = Math.floor(Math.random()*range)
    // return one entry of itemNumbers and delete that entry
    return itemNumbers.splice(randomIndex, 1)[0]
  }

  const createButtons = (hasImages) => {
    const homeButton = document.createElement("img");
    homeButton.classList.add("home");
    homeButton.src = homeImage;
    homeButton.addEventListener("click", displayHome);

    const nextChapterButton = document.createElement("img");
    nextChapterButton.classList.add("next");
    nextChapterButton.src = arrow;

    const containerText = document.createElement("p");
    containerText.classList.add("container-text");
    containerText.textContent = "NEXT";

    const nextChapterContainer = document.createElement("div");
    nextChapterContainer.classList.add("next-container");
    nextChapterContainer.append(nextChapterButton, containerText);

    if (hasImages) {
      nextChapterContainer.addEventListener("click", hideStoryContent);
    } else {
      nextChapterContainer.addEventListener("click", () =>
        callback(chapterObj)
      );
    }

    return { homeButton, nextChapterContainer };
  };

  const setupImages = () => {
    const container = document.createElement("div");
    const images = chapterObj.getImages();

    let itemNumbers = [1, 2, 3, 4]
    let counter = 4;
    for (let image of images) {

      const picture = document.createElement("img");
      picture.src = image.url;
      picture.draggable = false;

      const pictureContainer = document.createElement("div");
      pictureContainer.classList.add("picture")
      pictureContainer.classList.add(image.cssClass);
      pictureContainer.append(picture);

      if (!pictureContainer.classList.contains("drop-container")) {
        pictureContainer.classList.add(`drag-item-${randomize(counter, itemNumbers)}`)
        makeDraggable(pictureContainer, container);
      }

      container.append(pictureContainer);
      counter--
    }

    makeDroppable(
      container.querySelector(".right"),
      container.querySelector(".drop-container"),
      container,
      () => callback(chapterObj)
    );

    return container;
  };

  const setupChapterPage = () => {
    const section = document.createElement("section");

    const story = document.createElement("p");
    story.classList.add("chapter-story");
    story.textContent = chapterObj.getStory();

    if (chapterObj.getImages() !== null) {
      //chapter has images and question.

      const { homeButton, nextChapterContainer } = createButtons(true);

      const title = document.createElement("H1");
      title.classList.add("chapter-title");
      title.textContent = `Chapter ${chapterObj.getChapterNumber()}`;

      const question = document.createElement("p");
      question.classList.add("chapter-question");
      question.classList.add("hide");
      question.textContent = chapterObj.getQuestion();

      const container = setupImages();
      container.id = "container";
      container.append(
        homeButton,
        nextChapterContainer,
        title,
        story,
        question
      );

      const images = container.querySelectorAll(".picture");
      images.forEach((img) => img.classList.add("hide"));

      section.append(container);
    } else {
      //chapter is text only.
      const { homeButton, nextChapterContainer } = createButtons(false);

      const textContainer = document.createElement("div");
      textContainer.id = "container";
      textContainer.append(homeButton, nextChapterContainer, story);

      section.append(textContainer);
    }

    let index = 1;

    const writeStory = () => {
      story.textContent = chapterObj.getStory().slice(0, index);
      index++;
    };

    setInterval(writeStory, 35);

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
