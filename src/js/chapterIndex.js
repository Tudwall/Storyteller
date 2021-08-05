import { render } from "./render.js"
import { startPage } from "./index";
import { createChapterStructure } from "./chapterDOM.js";

const chapterIndex = (story, storyLogic) => {
    let currentChapterNumber = 1;
    let latestChapterNumber = findLatestCompletedChapter();
    
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

    function findLatestCompletedChapter() {

        let completedChapterExist = story.getChapters().some(chapter => {
            return chapter.getCompletionStatus() == true;
        });

        //no chapter completed, start at 0 (only chapter 1 unlocked)
        if (!completedChapterExist) {
            return 0;
        } else {

            let allChapters = story.getChapters();
            let highestChapterNum = 1;

            //check all chapters in story, keep track of the highest completed chapter. 
            for (let i=0; i < allChapters.length; i++) {

                if (allChapters[i].getCompletionStatus() == true) {
                    if (allChapters[i].getChapterNumber() > highestChapterNum) {
                        //new highest completed chapter number found.
                        highestChapterNum = allChapters[i].getChapterNumber();
                    }
                }
            }
            return highestChapterNum;
        }
    }


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
            button.classList.add("play-chapter-button");
            button.addEventListener("click", () => {
                render(createChapterStructure(chapter, () => storyLogic.displayChapterEnd(chapter)));
            });

            // ONLY unlock "play" button for chapters up to latestChapterNumber (which is the last completed chapter) + 1";
            if (currentChapterNumber <= latestChapterNumber + 1) {
                //button enabled by default. 
            } else {
                button.disabled = true;
                button.textContent = "Locked";
                button.classList.add("disabled-button");
            }
        
            chapterNode.appendChild(text);
            chapterNode.appendChild(button);

            chaptersContainer.appendChild(chapterNode);   

            currentChapterNumber++;
        }
    }

    console.log(latestChapterNumber);

    base.appendChild(text);
    base.appendChild(home_button);
    base.appendChild(chaptersContainer);

    return base;
};


export { chapterIndex };