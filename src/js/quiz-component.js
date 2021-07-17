const quizComponent = (quizInfo) => {
    const title = document.createElement("h2");
    title.id = "title";
    title.textContent = "Pop quiz!";
  
    const question = document.createElement("p");
    question.id = "question";
    question.textContent = quizInfo.question;

    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-btn";
    submitBtn.textContent = "Submit my answer!";

    // submitBtn.addEventListener("click", answerHandler);

    const quiz = document.createElement("div");
    quiz.id = "quiz";
    quiz.appendChild(title);
  
    const form = document.createElement("form");
    form.id = "answers";
  
    form.appendChild(question); 

    const choices = quizInfo.choices;
    choices.forEach(choice => {
        const answer = document.createElement("input");
        answer.setAttribute("type", "radio");
        answer.id = `choice-${choices.indexOf(choice)}`;
        answer.setAttribute("name", "answer");
        answer.setAttribute("data-i", choices.indexOf(choice));

        const label = document.createElement("label");
        label.setAttribute("for", `${choice}`);
        label.textContent = choice;
        
        form.appendChild(answer);
        form.appendChild(label);
    });

    form.appendChild(submitBtn);
    quiz.appendChild(form);
   

    return quiz
}

/***********************  dummy quizInfo ***********************
quizInfo = {
    question: "This is the question?",
    answer: 1, // index of the correct answer in the choices array.
    choices: ["Choice 1", "Choice 2", "Choice 3"],
}
*/
