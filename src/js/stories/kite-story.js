import { chp_1, chp_2, chp_3, chp_4, chp_5, chp_6 } from "./1/chapters";
import { qs_1, qs_2, qs_3, qs_4, qs_5 } from "./1/dnd";
import { quizArray } from "./1/quiz";
import { Chapter } from "../chapter-factory";
import { Story } from "../story-factory";
import { QuizSummary } from "../quiz-factory";
import {
  chapterOneImages,
  chapterTwoImages,
  chapterThreeImages,
  chapterFourImages,
  chapterFiveImages,
} from "./1/images-setup";

const chapterOne = Chapter(chp_1, 1, chapterOneImages, qs_1);
const chapterTwo = Chapter(chp_2, 2, chapterTwoImages, qs_2);
const chapterThree = Chapter(chp_3, 3, chapterThreeImages, qs_3);
const chapterFour = Chapter(chp_4, 4, chapterFourImages, qs_4);
const chapterFive = Chapter(chp_5, 5, chapterFiveImages, qs_5);
const chapterSix = Chapter(chp_6, 6);

const storyQuizzes = QuizSummary(quizArray).quizzes;

const kiteStory = Story("Kite story", storyQuizzes);
kiteStory.addChapters(
  chapterOne,
  chapterTwo,
  chapterThree,
  chapterFour,
  chapterFive,
  chapterSix,
);

export { kiteStory };
