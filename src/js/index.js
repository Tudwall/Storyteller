import "../styles/index.css";
import { startingPage } from "./starting-page";
import { firstChapter, secondChapter, thirdChapter } from "./demo-story";
import { createChapterStructure } from "./chapterDOM";
import { render } from "./render";

//Now it's just one story object, later we should create factory for stories
const storyObj = {
  chapters: [],
  addChapter(...chapterData) {
    chapterData.forEach((data) => {
      this.chapters.push(data);
    });
  },

  findNextChapter(currentChapter) {
    const chapterNumber = currentChapter.getChapterNumber();

    return this.chapters.find(
      (nextChapter) => nextChapter.getChapterNumber() === chapterNumber + 1
    );
  },
};

storyObj.addChapter(firstChapter, thirdChapter, secondChapter);

const firstChapterStructure = createChapterStructure(firstChapter);
const startPage = startingPage(() =>
  render(firstChapterStructure.setupChapterPage())
);

render(startPage);

export { storyObj };
