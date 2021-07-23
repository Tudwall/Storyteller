import Quiz from "./quiz-factory";

let quiz1;

beforeEach(() => {
  const question = "question1";
  const choices = ["choice1", "choice2", "choice3"];
  const correctAnswerIndex = 1;
  const passed = false;

  quiz1 = Quiz(question, choices, correctAnswerIndex, passed);
});

test("getQuestion returns the set question", () => {
  expect(quiz1.getQuestion()).toBe("question");
});

test("getChoices returns the set choices", () => {
  expect(quiz1.getChoices()).toBe(["choice1", "choice2", "choice3"]);
});

test("getAnswer returns the index of correct choice", () => {
  expect(quiz1.getAnswer()).toBe(1);
});

test("getPassed returns true after setPassed was used", () => {
  quiz1.setPassed();
  expect(quiz1.getPassed()).toBe(true);
});
