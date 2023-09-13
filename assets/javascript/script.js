
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

let quizQuestions_count = 0;
let startQuizEl = document.querySelector("#start-button");
let questionEl = document.querySelector("#question");

let timerEl = document.getElementById('countdown');

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
    let questionTitleEl = document.getElementById('questionTitle');
    questionTitleEl.textContent = quizQuestions[index].question;

    let option1El = document.getElementById('option1');
    option1El.textContent = quizQuestions[index].option[0];

    let option2El = document.getElementById('option2');
    option2El.textContent = quizQuestions[index].option[1];

    let option3El = document.getElementById('option3');
    option3El.textContent = quizQuestions[index].option[2];

    let option4El = document.getElementById('option4');
    option4El.textContent = quizQuestions[index].option[3];
}




// optionEl.addEventListener("click", funtion() {
//     index++;
//     displayQuestion(index);
// })



//write another function for increament index





















// window.onload = function() {
//     show(question_count);
// };

// function show(count) {
//     let question = document.getElementById("questions");
//     let [first, second, third, fourth] = questions[count].options;

//     question.innerHTML = <h2>Q${count + 1}. ${questions[count].question}</h2>
//     <ul class="option=group">
//         <li class="option">${first}</li>
//         <li class="option">${second}</li>
//         <li class="option">${thirdt}</li>
//         <li class="option">${fourth}</li>
//     </ul>;
//     toggleActive();
// }

// function toogleActive() {
//     let option = document.querySelectorAll("li.option");
//     for(let i = 0; i < option.length; i++) {
//         option[i].onclick = function() {
//             for(let i=0; i < option.length; i++) {
//                 if(option[i].classList.contains("active")) {
//                     option[i].classList.remove("active");
//                 }
//             }
//             option[i].classList.add("active");
//         }
//     }
// }