import { render } from "./render";
import { createChapterStructure } from "./chapterDOM";
import { createChapterEnd } from "./chapterEnd";
import { createStoryEnd } from "./storyEnd";

const gameLogic = (story) => {
  const startFirstChapter = () => {
    const firstChapter = story.findFirstChapter();
    return createChapterStructure(firstChapter, displayChapterEnd);
  };

  const endStory = () => {
    const storyTitle = story.getTitle();
    return createStoryEnd(storyTitle);
  };

  //For now this is our callback for drag and drop
  const displayChapterEnd = (chapter) => {
    const chapterNumber = chapter.getChapterNumber();
    const quiz = "Quiz";
    const nextChapter = goToNextChapter(chapter);
    const chapterEnd = createChapterEnd(chapterNumber, quiz, nextChapter);

    render(chapterEnd);
  };

  const goToNextChapter = (chapter) => {
    chapter.setCompletionStatus();
    //player.setScore = player.getScore() + 1;

    const nextChapter = story.findNextChapter(chapter);

    if (nextChapter) {
      return createChapterStructure(nextChapter, displayChapterEnd);
    } else {
      return endStory();
    }
  };

  return { startFirstChapter };
};

export { gameLogic };
