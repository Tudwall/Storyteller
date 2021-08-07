const Quiz = (question, choices, answer) => {
  let passed = false;

  const getQuestion = () => question;
  const getChoices = () => choices;
  const getAnswer = () => choices[answer];
  const setPassed = () => (passed = true);
  const getPassed = () => passed;

  return {
    getQuestion,
    getChoices,
    getAnswer,
    setPassed,
    getPassed,
  };
};

const QuizSummary = (quizArray) => {
  let quizzes = [];

  for (let i = 0; i < quizArray.length; i++) {
    let quiz = Quiz(
      quizArray[i].question,
      quizArray[i].choices,
      quizArray[i].answer
    );
    quizzes.push(quiz);
  }

  return quizzes;
};

export { Quiz, QuizSummary };
