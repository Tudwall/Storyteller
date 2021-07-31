import { render } from "./render";
import { createChapterStructure } from "./chapterDOM";
import { createChapterEnd } from "./chapterEnd";
import { createStoryEnd } from "./storyEnd";
import { quizComponent } from "./quiz-component";

const gameLogic = (story) => {
  /* getFinalQuzzes returns new array of quizes. Since this array dosen't exist in
  story-factory, gameLogic needs to store array of quizes in itself to enable startStoryQuiz
  udpating quizzes completion status. Also if we won't change how game gets quizes, there will be
  code repetition in checkQuizAnswer and  startStoryQuiz. My suggestion - change how we get quizzes to
  something similar to getCurrentChapter and just render all quizzes instead few of them. */
  const getQuizData = story.getFinalQuizzes();

  const startFirstChapter = () => {
    const firstChapter = story.getCurrentChapter();
    return createChapterStructure(firstChapter, displayChapterEnd);
  };

  const endStory = () => {
    const storyTitle = story.getTitle();
    return createStoryEnd(storyTitle);
  };

  const checkQuizAnswer = (quiz) => {
    const checkedInput = document.querySelectorAll('input[type="radio"]');
    const rightAnswer = quiz.getAnswer();

    let answerValue;

    for (let i = 0; i < checkedInput.length; i++) {
      if (checkedInput[i].checked) {
        answerValue = checkedInput[i].dataset.answer;
      }
    }

    if (rightAnswer === answerValue) {
      //quiz.setPassed();
      //story.setCompletionStatus();
      const getQuiz = getQuizData.find((quiz) => quiz.getPassed() === false);

      if (!getQuiz) {
        render(endStory());
      } else {
        startStoryQuiz();
      }
    } else {
      alert("WRONG");
    }
  };

  const startStoryQuiz = () => {
    const getQuiz = getQuizData.find((quiz) => quiz.getPassed() === false);
    const index = getQuizData.indexOf(getQuiz);
    getQuizData[index].setPassed();

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
      return createChapterStructure(nextChapter, displayChapterEnd);
    } else {
      return startStoryQuiz();
    }
  };

  return { startFirstChapter };
};

export { gameLogic };
