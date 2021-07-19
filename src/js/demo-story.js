//File for demo purposes, will be deleted later. Stores data for chapters.
import { Chapter } from "./chapter-factory";

const story =
  "Placeholder story. Placeholder story. Placeholder story. Placeholder story. Placeholder story. Placeholder story.";
const images = [
  {
    cssClass: "drop-container",
    url: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    cssClass: "right",
    url: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    cssClass: "wrong",
    url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
  },
];

const images2 = [
  {
    cssClass: "drop-container",
    url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    cssClass: "right",
    url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    cssClass: "wrong",
    url: "https://images.unsplash.com/photo-1568572933382-74d440642117?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

const images3 = [
  {
    cssClass: "drop-container",
    url: "https://images.unsplash.com/photo-1559818454-1b46997bfe30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  },
  {
    cssClass: "right",
    url: "https://images.unsplash.com/photo-1559818454-1b46997bfe30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  },
  {
    cssClass: "wrong",
    url: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1786&q=80",
  },
];

const question = "Is it good question?";
const firstChapter = Chapter(story, images, question, 1);
const secondChapter = Chapter(story, images2, question, 2);
const thirdChapter = Chapter(story, images3, question, 3);

export { firstChapter, secondChapter, thirdChapter };
