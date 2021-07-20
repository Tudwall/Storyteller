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
    
    // Here goes the function declared in the game logic module. Which handles the good and bad answers.
    // submitBtn.addEventListener("click", answerHandler);

    const quiz = document.createElement("div");
    quiz.id = "quiz";
    quiz.appendChild(title);
  
    const form = document.createElement("form");
    form.id = "answers";

    const nextChapterBtn = document.createElement("button");
    nextChapterBtn.id = "next-chapter-btn";
    nextChapterBtn.textContent = "Next chapter!";

    // Here goes the function that links to the next chapter.
    // nextChapterBtn.addEventListener("click", nextChapterFunction);

    /* Passed is defined in the gamelogic component.
    Will need to change the way it's called here. */
    if (passed) {
        nextChapterBtn.style.display = "block";
        const congratulationMsg = document.createElement("p");
        congratulationMsg.id = "congratulation-msg";
        congratulationMsg.textContent = "Congratulations! You passed this quiz!"
     } else {
         nextChapterBtn.style.display = "none";
     }
 
  
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
    quiz.appendChild(nextChapterBtn);
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
