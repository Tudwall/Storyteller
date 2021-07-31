import "../styles/index.css";
import { startingPage } from "./starting-page";
import { firstChapter, secondChapter, thirdChapter } from "./demo-story";
import { render } from "./render";
import { gameLogic } from "./logic";
import { Story } from "./story-factory";
import { Quiz } from "./quiz-factory";

const question = "??????";
const choices = ["Ugly", "Beautiful", "Red", "Strong"];
const answer = choices[0];
const quiz_1 = Quiz(question, choices, answer);
const choices2 = ["That", "Not that", "Maybe that", "Something else"];
const answer2 = choices2[2];
const quiz_2 = Quiz(question, choices2, answer2);
const choices3 = ["1", "2", "3", "4"];
const answer3 = choices3[1];
const quiz_3 = Quiz(question, choices3, answer3);

const firstStory = Story("Cool story", quiz_1, quiz_2, quiz_3);

firstStory.addChapters(firstChapter, thirdChapter, secondChapter);

const storyLogic = gameLogic(firstStory);
const storyStart = storyLogic.startFirstChapter();
const startPage = startingPage(() => render(storyStart));

render(startPage);
