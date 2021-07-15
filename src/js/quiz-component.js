const quizComponent = (quizInfo) => {
    const question = document.createElement("p");
    question.id = "question";
    question.textContent = quizInfo.question;

    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-btn";
    submitBtn.textContent = "Submit my answer!";
    submitBtn.addEventListener("click", quizClickHandler);

    const quiz = document.createElement("div");
    quiz.id = "quiz";
    quiz.appendChild(question);

    const choices = quizInfo.choices;
    choices.forEach(choice => {
        const answer = document.createElement("input");
        answer.setAttribute("type", "radio");
        answer.id = `data-${indexOf(choice)}`;
        answer.textContent = choice;
        quiz.appendChild(answer);
    });

    quiz.appendChild(submitBtn);

    return { quiz }
}

/***********************  dummy quizInfo ***********************
quizInfo = {
    question: "This is the question?",
    answer: 1, // index of the correct answer in the choices array.
    choices: ["Choice 1", "Choice 2", "Choice 3"],
}
*/