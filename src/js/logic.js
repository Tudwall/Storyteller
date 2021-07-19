import { storyObj } from "./index";
import { render } from "./render";
import { createChapterStructure } from "./chapterDOM";
import { createChapterEnd } from "./chapterEnd";

const gameLogic = (() => {
  //This function is our callback for drag and drop.
  const displayChapterEnd = (chapter) => {
    const chapterNumber = chapter.getChapterNumber();
    const quiz = "Quiz";
    const nextChapter = goToNextChapter(chapter).setupChapterPage();
    const chapterEnd = createChapterEnd(chapterNumber, quiz, nextChapter);

    render(chapterEnd);
  };

  const goToNextChapter = (chapter) => {
    chapter.setCompletitionStatus();
    //player.setScore = player.getScore() + 1;

    const nextChapter = storyObj.findNextChapter(chapter);

    if (nextChapter) {
      return createChapterStructure(nextChapter);
    } else {
      alert("END!");
    }
  };

  return { displayChapterEnd, goToNextChapter };
})();

export { gameLogic };
