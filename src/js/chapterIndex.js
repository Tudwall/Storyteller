import { render } from "./render.js"
import { startPage } from "./index";
import { createChapterStructure } from "./chapterDOM.js";

//either this or create new logic object in here. 

const chapterIndex = (story, storyLogic) => {
    let currentChapterNumber = 1;

    const base = document.createElement("div");
    base.id = "chapter-index";

    const text = document.createElement("h1");
    text.textContent = "Chapters";

    const home_button = document.createElement("button");
    home_button.textContent = "Back to Home";
    home_button.id = "home-button";
    home_button.addEventListener("click", () => {
        render(startPage);
    })


    const chaptersContainer = document.createElement("div");
    chaptersContainer.id = "chapters-container";

    /*Makes sure chapterNodes are appended in order, based on chapterNumber. Starts at 1, ends at last chapter 
    (or while loop breaks if it cannot find chapter with currentChapterNumber)
    */

    while (story.getChapters().length !== currentChapterNumber-1) {
        let chapter = story.getChapters().find(chapter => chapter.getChapterNumber() == currentChapterNumber);

        if (chapter == undefined) {
            //there is a chapter missing. 
            break;
        } else {
            const chapterNode = document.createElement("div");
            chapterNode.className = "chapter";

            const text = document.createElement("p");
            text.textContent = `Chapter ${currentChapterNumber}`;

            const button = document.createElement("button");
            button.textContent = "Play";
            button.addEventListener("click", () => {
                render(createChapterStructure(chapter, () => storyLogic.displayChapterEnd(chapter)));
            });
            
            chapterNode.appendChild(text);
            chapterNode.appendChild(button);

            chaptersContainer.appendChild(chapterNode);   

            currentChapterNumber++;
        }
    }

    base.appendChild(text);
    base.appendChild(home_button);
    base.appendChild(chaptersContainer);

    return base;
};


export { chapterIndex };