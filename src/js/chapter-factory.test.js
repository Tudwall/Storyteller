import Chapter from "./chapter-factory";

let chapter1;

beforeEach(() => {
  chapter1 = Chapter("chapter1Story", 1, ["src1", "src2"], "chapter1Question");
});

test("setCompletionStatus toogles from false to true", () => {
  chapter1.setCompletionStatus();
  expect(chapter1.getCompletionStatus()).toBe(true);
});

test("getStory returns set story", () => {
  expect(chapter1.getStory()).toBe("chapter1Story");
});

test("getImages returns set images", () => {
  expect(chapter1.getImages()).toStrictEqual(["src1", "src2"]);
});

test("getQuestion returns set question", () => {
  expect(chapter1.getQuestion()).toBe("chapter1Question");
});

test("getChapterNumber returns set chapter", () => {
  expect(chapter1.getChapterNumber()).toBe(1);
});
