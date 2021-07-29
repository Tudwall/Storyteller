const Quiz = (question, choices, answer) => {
  let passed = false;

  const getQuestion = () => question;
  const getChoices = () => choices;
  const getAnswer = () => answer;
  const setPassed = () => (passed = !passed);
  const getPassed = () => passed;

  return { getQuestion, getChoices, getAnswer, setPassed, getPassed };
};

const QuizSummary = (quizArray) => {
  let passed = false;
  let quizzes = [];

  for (let i=0; i < quizArray.length; i++) {
    let quiz = Quiz(quizArray[i].question, quizArray[i].choices, quizArray[i].answer);
    quizzes.push(quiz);
  }

  const allPassed = () => {
    for (let i=0; i < quizzes.length; i++) {
      if (quizzes[i].passed == false) {
        return false
      }
    }
    return true;
  }

  return {quizzes, allPassed};
};

export {Quiz, QuizSummary};