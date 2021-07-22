const Quiz = (question, choices, answer) => {
  let passed = false;

  const getQuestion = () => question;
  const getChoices = () => choices;
  const getAnswer = () => answer;
  const setPassed = () => (passed = !passed);
  const getPassed = () => passed;

  return { getQuestion, getChoices, getAnswer, setPassed, getPassed };
};

export default Quiz;
