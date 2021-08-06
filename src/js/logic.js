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
  let quizIndex = 0;

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

  const checkQuizAnswer = (quiz, nextQuizIndex) => {

    const checkedInput = document.querySelector('input[type="radio"]:checked');
    const rightAnswer = quiz.getAnswer();
    const storyEnd = endStory();

    let answerValue = checkedInput.dataset.answer;

    if (rightAnswer === answerValue) {
      quiz.setPassed();
 
      const getQuiz = story.getFinalQuizzes(nextQuizIndex);

      if (!getQuiz) {
        story.setCompletionStatus();
        render(storyEnd);
      } else {

        startStoryQuiz(nextQuizIndex);
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

  const startStoryQuiz = (quizIndex) => {
    //fetch quiz based on it's index in quizzes array. 
    const getQuiz = story.getFinalQuizzes(quizIndex);
    const displayQuiz = quizComponent(getQuiz, () => checkQuizAnswer(getQuiz, quizIndex+1));

    render(displayQuiz);
  };

  //Callback for createChapterStructure which is passed to drag and drop
  const displayMessage = (chapter) => {
    const chapterNumber = chapter.getChapterNumber();
    const generateNextChapter = goToNextChapter(chapterNumber);
    const messageText =
      "Congratulations! You finished this part of the story and now you can go to the next by clicking button below!";

    if (generateNextChapter) {
      const setMessage = message(
        () => render(generateNextChapter),
        messageText
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
      //quiz index starts at 0. 
      return startStoryQuiz(quizIndex);
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
