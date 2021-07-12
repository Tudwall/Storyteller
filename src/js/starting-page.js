const startingPage = (renderFunction, HtPRenderFunction) => {
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Unnamed Game";

    const desc = document.createElement("p");
    desc.id = "description";
    desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida consectetur est at pharetra. Cras quis arcu convallis magna egestas feugiat."

    const startGameBtn = document.createElement("button");
    startGameBtn.id = "start-game-button";
    startGameBtn.textContent = "Start game";
    startGameBtn.addEventListener("click", renderFunction);

    const HtPBtn = document.createElement("button");
    HtPBtn.id = "how-to-play-button";
    HtPBtn.textContent = "How to play";
    HtPBtn.addEventListener("click", HtPRenderFunction);

    return { title, desc, startGameBtn, HtPBtn }
}

const renderStartingPage = (() => {
    const content = document.querySelector("#content");

    content.appendChild(startingPage.title);
    content.appendChild(startingPage.desc);
    content.appendChild(startingPage.startGameBtn);
    // HtPBtn will be rendered as a separate component.
})();

export { startingPage }
