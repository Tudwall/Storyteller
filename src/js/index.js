import "../styles/index.css";
import { startingPage } from "./starting-page";
import { render } from "./render";
import { gameLogic } from "./logic";
import { kiteStory } from "./stories/kite-story";
import { chapterIndex } from "./chapterIndex";

const storyLogic = gameLogic(kiteStory);
const storyStart = storyLogic.startFirstChapter();
const startPage = startingPage(() => render(storyStart), null, () => render(chapterIndex(kiteStory, storyLogic)));

render(startPage);


export {startPage};