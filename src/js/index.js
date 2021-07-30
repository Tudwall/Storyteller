import "../styles/index.css";
import { startingPage } from "./starting-page";
import { render } from "./render";
import { gameLogic } from "./logic";
import { kiteStory } from "./stories/kite-story";

const storyLogic = gameLogic(kiteStory);
const storyStart = storyLogic.startFirstChapter();
const startPage = startingPage(() => render(storyStart));

render(startPage);
