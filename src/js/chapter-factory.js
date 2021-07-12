import { makeDraggable } from "./drag-drop";

const CreateChapter = (text, img) => {
  const createButtons = () => {
    const homeButton = document.createElement("button");
    const nextChapterButton = document.createElement("button");

    homeButton.textContent = "home";
    nextChapterButton.textContent = "-->";

    return { homeButton, nextChapterButton };
  };

  const setupImages = (images) => {
    let gallery = [];

    images.forEach((image) => {
      const picture = document.createElement("img");
      picture.src = image;
      makeDraggable(picture);
      gallery.push(picture);
    });

    return gallery;
  };

  const createChapterPage = () => {
    const section = document.createElement("section");
    const content = document.querySelector("#content");
    const { homeButton, nextChapterButton } = createButtons();
    const story = document.createElement("p");
    const images = setupImages(img);

    content.textContent = "";
    story.textContent = text;
    section.append(homeButton, nextChapterButton, story, images[0], images[1]);

    content.append(section);
  };

  const render = () => {
    createChapterPage();
  };

  return { render };
};

export { CreateChapter };
