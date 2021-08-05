//I added second parameter which is callback
const quizComponent = (quizInfo, callback) => {
  const title = document.createElement("h2");
  title.id = "quiz-title";
  title.textContent = "Pop quiz!";

  const question = document.createElement("p");
  question.id = "quiz-question";
  question.textContent = quizInfo.getQuestion();

  const submitBtn = document.createElement("button");
  submitBtn.id = "quiz-submit-btn";
  submitBtn.textContent = "Submit my answer!";
  submitBtn.setAttribute("type", "button");

  // Here goes the function declared in the game logic module. Which handles the good and bad answers.
  submitBtn.addEventListener("click", () => {
    callback(quizInfo);
  });

  const quiz = document.createElement("div");
  quiz.id = "quiz-container";
  quiz.appendChild(title);

  const form = document.createElement("form");
  form.id = "quiz-form";

  const section = document.createElement("section");

  const nextChapterBtn = document.createElement("button");
  nextChapterBtn.id = "next-chapter-btn";
  nextChapterBtn.textContent = "Next chapter!";

  // Here goes the function that links to the next chapter.
  // nextChapterBtn.addEventListener("click", nextChapterFunction);

  /* This part of component probably should be wrapped into function and 
  passed as callback to submitBtn. */

  if (quizInfo.getPassed() === true) {
    nextChapterBtn.classList.toggle("hide");
    const congratulationMsg = document.createElement("p");
    congratulationMsg.id = "quiz-congratulation-msg";
    congratulationMsg.textContent = "Congratulations! You passed this quiz!";
  } else {
    nextChapterBtn.classList.toggle("hide");
  }

  form.appendChild(question);

  const choices = quizInfo.getChoices();
  choices.forEach((choice, i) => {
    const answer = document.createElement("input");
    answer.classList.add("quiz-answer-input");
    answer.setAttribute("type", "radio");
    answer.id = `choice-${i}`;
    answer.setAttribute("name", "answer");
    answer.setAttribute("data-i", i);
    answer.dataset.answer = choice;

    const label = document.createElement("label");
    label.classList.add("quiz-answer-label");
    label.setAttribute("for", `choice-${i}`);

    const radioControl = document.createElement("span");
    radioControl.classList.add("radio__control");

    const radioInput = document.createElement("span");
    radioInput.classList.add("radio__input");

    const radioLabel = document.createElement("span");
    radioLabel.classList.add("radio__label");
    radioLabel.textContent = choice;

    radioInput.appendChild(answer);
    radioInput.appendChild(radioControl);
    label.appendChild(radioInput);
    label.appendChild(radioLabel);
    form.appendChild(label);
  });

  form.appendChild(submitBtn);
  quiz.appendChild(nextChapterBtn);
  quiz.appendChild(form);
  section.appendChild(quiz);

  return section;
};

/***********************  dummy quizInfo ***********************
quizInfo = {
    question: "This is the question?",
    answer: 1, // index of the correct answer in the choices array.
    choices: ["Choice 1", "Choice 2", "Choice 3"],
}
*/
export { quizComponent };
