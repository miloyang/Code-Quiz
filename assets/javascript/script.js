let quizQuestions_count = 0;
let startQuizEl = document.querySelector("#start-button");
let questionEl = document.querySelector("#question");
let timerEl = document.getElementById('countdown');
let questionTitleEl = document.getElementById('questionTitle');
let option1El = document.getElementById('option1');
let option2El = document.getElementById('option2');
let option3El = document.getElementById('option3');
let option4El = document.getElementById('option4');
let finalScoreEl = document.getElementById('final-score');
let initialsFormEl = document.getElementById('initials-form');
let initialsEl = document.getElementById('initials');
let submitEl = document.getElementById('submit');


let quizQuestions = [
    {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "A. <script>",
        option: [
            "A. <script>",
            "B. <scripting>",
            "C. <js>",
            "D. <javascript>"
        ]
    },

    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        answer: "B. Both the <head> secctin and the <body> section are correct",
        option: [
            "A. The <head> section",
            "B. Both the <head> secctin and the <body> section are correct",
            "C. The <body> section",
            "D. None of the above"
        ]
    },

    {
        id: 3,
        question: "What is the default value of the position property?",
        answer: "A. static",
        option: [
            "A. static",
            "B. relative",
            "C. fixed",
            "D. absolute"
        ]
    },

    {
        id: 4,
        question: "What does CSS stand for?",
        answer: "D. Cascading Style Sheets",
        option: [
            "A. Creative Style Sheets",
            "B. Colorful Style Sheets",
            "C. Computer Style Sheets",
            "D. Cascading Style Sheets"
        ]
    },

    {
        id: 5,
        question: "Choose the correct HTML element for the largest heading:",
        answer: "C. <h1>",
        option: [
            "A. <heading>",
            "B. <head>",
            "C. <h1>",
            "D. <h6>"
        ]
    },

    {
        id: 6,
        question: "What is the correct HTML element for inserting a line break?",
        answer: "A. <br>",
        option: [
            "A. <br>",
            "B. <break>",
            "C. <lb>",
            "D. <line break>"
        ]
    },
];

startQuizEl.addEventListener("click", function () {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            // return "Game Over!"
        }
    }, 1000);

    let homeEl = document.getElementById('home');
    homeEl.classList.add('hide');

    let questionEl = document.getElementById('question');
    questionEl.classList.remove('hide');

    displayQuestion();
})

var index = 0;

function displayQuestion() {
    questionTitleEl.textContent = quizQuestions[index].question;

    option1El.textContent = quizQuestions[index].option[0];
    option2El.textContent = quizQuestions[index].option[1];
    option3El.textContent = quizQuestions[index].option[2];
    option4El.textContent = quizQuestions[index].option[3];
}

// nextQuestion() {
//     for (var i = 0; i < quizQuestions.question.length; i++) {
//         displayQuestion(index);
//     }
// }


// optionEl.addEventListener("click", funtion() {
//     index++;
//     displayQuestion(index);
// })




