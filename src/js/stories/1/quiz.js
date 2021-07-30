//"answer" in quizObj corresponds to the INDEX of the correct answer in the choices array. 

const quiz_1 = {
    question: "Which word describes the kite accurately?",
    choices: [
        "Ugly",
        "Beautiful",
        "Red",
        "Strong",
    ],
    answer: 1
}

const quiz_2 = {
    question: "What happened to the kite at the end?",
    choices: [
        "The kids retrieved the kite",
        "The kids made a new kite",
        "The kite flew away",
        "The kite broke",
    ],
    answer: 2,
}


const quizArray = [quiz_1, quiz_2];

export default quizArray;
