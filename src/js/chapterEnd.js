//import renderContent function. 

//quiz will be a node that can be embedded into chapter end page. 
const createChapterEnd = (chapterNumber, quiz, nextPage, homePage) => {
    const base = document.createElement("div");
    base.setAttribute('id', 'chapter-end')

    let quizPassed = false;
    let toggleQuizStatus = () => quizPassed = true; 

    let text = document.createElement("p");
    text.innerHTML = `Chapter ${chapterNumber} complete!`

    let nextButton = document.createElement("button");
    nextButton.innerHTML = `Next Chapter`;
    //if quiz has not been passed yet, do NOT display next chapter button
    nextButton.style.display = (quizPassed)? "block" : "none";
    nextButton.addEventListener("click", () => {
        //renderContent(nextPage)
    })

    let homeButton = document.createElement("button");
    homeButton.innerHTML = `Back To Home`;
    homeButton.addEventListener("click", () => {
        //renderContent(homePage)
    })

    base.appendChild(text);
    //Need to implement quiz.
    // base.appendChild(createQuiz(quizInfo, toggleQuizStatus));
    base.appendChild(nextButton);
    base.appendChild(restartButton);

    return base;
}

export default createChapterEnd;


