import { render } from "./render";
import { createChapterStructure } from "./chapterDOM";
import { createStoryEnd } from "./storyEnd";
import { quizComponent } from "./quiz-component";
import { kiteStory } from "./stories/kite-story";
import { startingPage } from "./starting-page";
import { message } from "./success-message";
import { chapterIndex } from "./chapterIndex";

const gameLogic = (story) => {
  let answerCounter = 0;

  const startFirstChapter = () => {
    const firstChapter = story.getChapter(1);
    return createChapterStructure(firstChapter, displayHome, () =>
      displayMessage(firstChapter)
    );
  };

  const endStory = () => {
    const storyTitle = story.getTitle();
    return createStoryEnd(storyTitle, displayHome);
  };

  const checkQuizAnswer = (quiz) => {
    const checkedInput = document.querySelector('input[type="radio"]:checked');
    const rightAnswer = quiz.getAnswer();
    const storyEnd = endStory();

    let answerValue = checkedInput.dataset.answer;

    if (rightAnswer === answerValue) {
      questionCompleted(storyEnd);
    } else {
      handleWrongAnswer(rightAnswer, storyEnd);
    }
  };

  const questionCompleted = (end) => {
    const getQuiz = story.getFinalQuizzes();
    getQuiz.setPassed();

    const isAllPassed = story.allPassed();

    if (isAllPassed) {
      story.setCompletionStatus();
      render(end);
    } else {
      startStoryQuiz(getQuiz);
    }
  };

  const handleWrongAnswer = (answer, end) => {
    const tryAgain =
      "Unfortunately, your answer was wrong but you can try again!";
    const finalAnswer = `Right answer was "${answer}"`;

    if (answerCounter < 2) {
      answerCounter++;
      render(message(tryAgain), false);
    } else {
      answerCounter = 0;
      render(
        message(finalAnswer, () => questionCompleted(end)),
        false
      );
    }
  };

  const startStoryQuiz = () => {
    const getQuiz = story.getFinalQuizzes();
    const displayQuiz = quizComponent(getQuiz, checkQuizAnswer);

    render(displayQuiz);
  };

  //Callback for createChapterStructure which is passed to drag and drop
  const displayMessage = (chapter) => {
    const chapterNumber = chapter.getChapterNumber();
    const generateNextChapter = goToNextChapter(chapterNumber);
    const messageText =
      "Congratulations! You finished this part of the story and now you can go to the next by clicking button below!";

    if (generateNextChapter) {
      const setMessage = message(messageText, () =>
        render(generateNextChapter)
      );
      render(setMessage, false);
    }
  };

  const goToNextChapter = (currentChapterNum) => {
    story.getChapter(currentChapterNum).setCompletionStatus();

    const nextChapter = story.findNextChapter(currentChapterNum);

    if (nextChapter) {
      return createChapterStructure(nextChapter, displayHome, () =>
        displayMessage(nextChapter)
      );
    } else { 
      return startStoryQuiz();
    }
  };

  const displayHome = () => {
    const storyLogic = gameLogic(kiteStory);
    const storyStart = storyLogic.startFirstChapter();
    const startPage = startingPage(() => render(storyStart), null, () => render(chapterIndex(kiteStory, storyLogic)));
    render(startPage);
  };

  return { startFirstChapter, displayMessage, displayHome };
};

export { gameLogic };
