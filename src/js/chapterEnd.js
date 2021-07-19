//import renderContent function. 

//quiz will be a node that can be embedded into chapter end page. 
const createChapterEnd = (chapterNumber, quiz, nextPage, homePage) => {
    const base = document.createElement("div");
    base.setAttribute('id', 'chapter-end')

    const text = document.createElement("p");
    text.textContent = `Chapter ${chapterNumber} complete!`

    const nextButton = document.createElement("button");
    nextButton.textContent = `Next Chapter`;
    nextButton.addEventListener("click", () => {
        //renderContent(nextPage)
    })

    const homeButton = document.createElement("button");
    homeButton.textContent = `Back To Home`;
    homeButton.addEventListener("click", () => {
        //renderContent(homePage)
    })

    base.appendChild(text);
    //need to implement quiz later. 
    base.appendChild(nextButton);
    base.appendChild(restartButton);

    return base;
}

export default createChapterEnd;


