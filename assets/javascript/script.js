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

var timeLeft = 60;
var index = 0;
var correctAnswers = 0;


function displayQuestion() {
    questionTitleEl.textContent = quizQuestions[index].question;

    option1El.textContent = quizQuestions[index].option[0];
    option2El.textContent = quizQuestions[index].option[1];
    option3El.textContent = quizQuestions[index].option[2];
    option4El.textContent = quizQuestions[index].option[3];

    // if (quizQuestions.option === quizQuestions.answer) {
    //     index++;
    //     return "Correct!"
    // } else {
    //     index++;
    //     timeLeft = timeLeft - 5;
    //     return "Wrong!"
    // }
}


function checkAnswer(selectedOption) {
    if (selectedOption === quizQuestions[index].answer) {
        correctAnswers++;
    } else {
        timeLeft -= 5;
    }

    index++;
    if (index < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timeInterval);
    questionEl.classList.add('hide');
    finalScoreEl.textContent = "Your final score: " + correctAnswers;
    initialsFormEl.classList.remove('hide');
}

var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        return endQuizr();
    }
}, 1000);

startQuizEl.addEventListener("click", function () {
    let homeEl = document.getElementById('home');
    homeEl.classList.add('hide');

    questionEl.classList.remove('hide');

    displayQuestion();

    // var timeInterval = setInterval(function () {
    //     if (timeLeft > 1) {
    //         timerEl.textContent = timeLeft
    //         timeLeft--;
    //     } else {
    //         timerEl.textContent = '';
    //         clearInterval(timeInterval);
    //         return endQuizr();
    //     }
    // }, 1000);
});


var optionElement = document.getElementsByClassName('option')
var optionElements = document.getElementsByClassName('option');

for (var i = 1; i < optionElements.length; i++) {
    optionElements[i].addEventListener('click', function (event) {
        let selectedOption = event.target.textContent;
        checkAnswer(selectedOption);
    });
}











































// // Pass the event through the function
// function displayQuestion(event) {
//     // Lets log the event to see which element we are clicking
// console.log(event?.target);
//     questionTitleEl.textContent = quizQuestions[index].question;

//     option1El.textContent = quizQuestions[index].option[0];
//     option2El.textContent = quizQuestions[index].option[1];
//     option3El.textContent = quizQuestions[index].option[2];
//     option4El.textContent = quizQuestions[index].option[3];

//     if (quizQuestions.option === quizQuestions.answer) {
//         index++;
//         return "Correct!";
//     } else {
//         index++;
//         timeLeft -= 5;
//         return "Wrong!";
//     }
// }

// Lets log the event to see which element we are clicking
// console.log(event?.target.innerText);



















// nextQuestion() {
//     for (var i = 0; i < quizQuestions.question.length; i++) {
//         if (quizQuestions.option == quizQuestions.answer);
//         console.log(correct!);
//         displayQuestion(index);
//     }
// }


// optionEl.addEventListener("click", funtion() {
//     index++;
//     displayQuestion(index);
// })




