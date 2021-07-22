import "../styles/index.css";
import { startingPage } from "./starting-page";
import { firstChapter, secondChapter, thirdChapter } from "./demo-story";
import { render } from "./render";
import { gameLogic } from "./logic";
import { Story } from "./stories-factory";

const firstStory = Story("Cool story");

firstStory.addChapters(firstChapter, thirdChapter, secondChapter);

const storyLogic = gameLogic(firstStory);
const storyStart = storyLogic.startFirstChapter();
const startPage = startingPage(() => render(storyStart));

render(startPage);
