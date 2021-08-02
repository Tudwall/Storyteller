import { render } from "./render";
import { createChapterStructure } from "./chapterDOM";
import { createChapterEnd } from "./chapterEnd";
import { createStoryEnd } from "./storyEnd";
import { quizComponent } from "./quiz-component";
import { kiteStory } from "./stories/kite-story";
import { startingPage } from "./starting-page";

const gameLogic = (story) => {
  let answerCounter = 0;

  const startFirstChapter = () => {
    const firstChapter = story.getCurrentChapter();
    return createChapterStructure(firstChapter, displayChapterEnd, displayHome);
  };

  const endStory = () => {
    const storyTitle = story.getTitle();
    return createStoryEnd(storyTitle);
  };

  const checkQuizAnswer = (quiz) => {
    const checkedInput = document.querySelector('input[type="radio"]:checked');
    const rightAnswer = quiz.getAnswer();
    const storyEnd = endStory();

    let answerValue = checkedInput.dataset.answer;

    if (rightAnswer === answerValue) {
      quiz.setPassed();
      const getQuiz = story.getFinalQuizzes();

      if (!getQuiz) {
        story.setCompletionStatus();
        render(storyEnd);
      } else {
        startStoryQuiz();
      }
    } else {
      if (answerCounter < 2) {
        answerCounter++;
        alert("Wrong answer, try again");
      } else {
        alert(`Right answer was ${rightAnswer}`);
        answerCounter = 0;
        render(storyEnd);
      }
    }
  };

  const startStoryQuiz = () => {
    const getQuiz = story.getFinalQuizzes();
    const displayQuiz = quizComponent(getQuiz, checkQuizAnswer);

    render(displayQuiz);
  };

  //For now this is our callback for drag and drop
  const displayChapterEnd = (chapter) => {
    const chapterNumber = chapter.getChapterNumber();
    const nextChapter = goToNextChapter();

    if (nextChapter !== undefined) {
      const chapterEnd = createChapterEnd(chapterNumber, nextChapter);
      render(chapterEnd);
    }
  };

  const goToNextChapter = () => {
    story.getCurrentChapter().setCompletionStatus();
    //player.setScore = player.getScore() + 1;

    const nextChapter = story.findNextChapter();

    if (nextChapter) {
      return createChapterStructure(
        nextChapter,
        displayChapterEnd,
        displayHome
      );
    } else {
      return startStoryQuiz();
    }
  };

  const displayHome = () => {
    const storyLogic = gameLogic(kiteStory);
    const storyStart = storyLogic.startFirstChapter();
    const startPage = startingPage(() => render(storyStart));
    render(startPage);
  };

  return { startFirstChapter };
};

export { gameLogic };
