import { render } from "./render";
import { createChapterStructure } from "./chapterDOM";
import { createStoryEnd } from "./storyEnd";
import { quizComponent } from "./quiz-component";
import { message } from "./success-message";

const gameLogic = (story) => {
  let answerCounter = 0;

  const startFirstChapter = () => {
    const firstChapter = story.getCurrentChapter();
    return createChapterStructure(firstChapter, displayMessage);
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
  const displayMessage = () => {
    const generateNextChapter = goToNextChapter();
    const messageText =
      "Congratulations! You finished this part of the story and now you can go to the next by clicking button below!";

    if (generateNextChapter) {
      const setMessage = message(messageText, () =>
        render(generateNextChapter)
      );
      render(setMessage, false);
    }
  };

  const goToNextChapter = () => {
    story.getCurrentChapter().setCompletionStatus();
    //player.setScore = player.getScore() + 1;

    const nextChapter = story.findNextChapter();

    if (nextChapter) {
      return createChapterStructure(nextChapter, displayMessage);
    } else {
      return startStoryQuiz();
    }
  };

  return { startFirstChapter };
};

export { gameLogic };
