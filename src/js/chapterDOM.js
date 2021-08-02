import { makeDraggable, makeDroppable } from "./drag-drop";

const createChapterStructure = (chapterObj, callback) => {
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

  const createButtons = (hasImages) => {
    const homeButton = document.createElement("button");
    const nextChapterButton = document.createElement("button");

    homeButton.textContent = "home";
    homeButton.classList.add("home");
    //homeButton.addEventListener('click', showHomeScreen)

    nextChapterButton.textContent = "Next";
    nextChapterButton.classList.add("next");

    if (hasImages) {
      nextChapterButton.addEventListener("click", hideStoryContent);
    } else {
      nextChapterButton.addEventListener("click", () => callback(chapterObj));
    }

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

    const story = document.createElement("p");
    story.textContent = chapterObj.getStory();

  
    if (chapterObj.getImages() !== null) {
      //chapter has images and question. 

      const { homeButton, nextChapterButton } = createButtons(true);

      const question = document.createElement("p");
      question.textContent = chapterObj.getQuestion();    
      const images = setupImages();

      question.className = "question";
      question.classList.add("hide");
      images.classList.add("hide");

      section.append(homeButton, nextChapterButton, story, question, images);

    } else {
      //chapter is text only.
      const { homeButton, nextChapterButton } = createButtons(false);

      section.append(homeButton, nextChapterButton, story);
    }

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
