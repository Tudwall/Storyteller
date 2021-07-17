//import renderContent

//should implement a quiz in the future. 

function createStoryEnd(storyTitle, quiz, homePage) {
    let base = document.createElement("div");

    let title = document.createElement("h1");
    title.textContent = `${storyTitle}`

    let description = document.createElement("p");
    description.textContent = "Congratulations! You have completed the story."

    let homeButton = document.createElement("button");
    homeButton.textContent = `Back To Home`;
    homeButton.addEventListener("click", () => {
        //renderContent(homePage)
    })

    base.appendChild(title);
    base.appendChild(description);
    base.appendChild(homeButton);

    return base;
}

export default createStoryEnd;