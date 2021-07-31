import { render } from "./render.js"
import { startingPage } from "./starting-page";
import { createChapterStructure } from "./chapterDOM.js";

const chapterIndex = (story) => {
    let currentChapterNumber = 1;

    const base = document.createElement("div");
    const text = document.createElement("h1");
    text.textContent = "Chapters";

    const home_button = document.createElement("button");
    home_button.addEventListener("click", () => {
        render(startingPage);
    })

    const chaptersContainer = document.createElement("div");
    chaptersContainer.id = "chapters-container";

    /*Makes sure chapterNodes are appended in order, based on chapterNumber. Starts at 1, ends at last chapter 
    (or while loop breaks if it cannot find chapter with currentChapterNumber)
    */

    while (story.chapters.length !== currentChapterNumber-1) {
        let chapter = story.chapters.find(chapter => chapter.getChapterNumber() == currentChapterNumber);

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

                //what should callback be?
                render(createChapterStructure(chapter, null));
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


export default chapterIndex;