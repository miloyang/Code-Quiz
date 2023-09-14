//Selecting the elements by ids
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
let submitEl = document.getElementById('submit');
let finalScorePageEl = document.getElementById('final-score-page');
let highscoresListEl = document.getElementById('highscores-list');
let initialsInputEl = document.getElementById('initials');
let optionElements = document.getElementsByClassName('option');

//Setting the quiz questions, answers and options in an object
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

//Setting the variables
var timeLeft = 60;
var index = 0;
var correctAnswers = 0;
var timeInterval;
var highscores = [];

//Creating an event listener for when the user clicks on startQuiz Element
startQuizEl.addEventListener("click", function () {
    let homeEl = document.getElementById('home');
    homeEl.classList.add('hide');

    questionEl.classList.remove('hide');

    displayQuestion();

    startTimer();
});

//Creating a function to display questions when the startQuiz element is clicked on
function displayQuestion(event) {
    // Lets log the event to see which element we are clicking
    // console.log(event?.target);
    questionTitleEl.textContent = quizQuestions[index].question;

    option1El.textContent = quizQuestions[index].option[0];
    option2El.textContent = quizQuestions[index].option[1];
    option3El.textContent = quizQuestions[index].option[2];
    option4El.textContent = quizQuestions[index].option[3];

    // Lets log the event to see which element we are clicking
    // console.log(event?.target.innerText);
}

//Creating a function to instruct what happens if the user clicks on correct or wrong answers.
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

//Creating a function when all questions have been answered
function endQuiz() {
    clearInterval(timeInterval);
    // countdownEl.classList.add('hide');
    questionEl.classList.add('hide');
    finalScoreEl.textContent = "Your final score: " + correctAnswers;
    finalScorePageEl.classList.remove('hide');
}

//Creating a function for the timer
function startTimer() {
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

//Creating a for loop for the questions to continue 
for (var i = 0; i < optionElements.length; i++) {
    optionElements[i].addEventListener('click', function (event) {
        let selectedOption = event.target.textContent;
        checkAnswer(selectedOption);
    });
}


initialsFormEl.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve highscores from local storage and initialize if null
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    let initialsInput = initialsInputEl.value.trim();

    if (initialsInput === "") {
        return; 
    }

    // Create a new score entry object 
    let scoreEntry = {
        initials: initialsInput,
        score: finalScoreEl
    };

    highscores.push(scoreEntry);

    // Store the updated highscores array in local storage
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // Redirect to the highscores.html page
    window.location.replace("highscores.html");

    //Call the showHighscores function
    showHighscores();
});


function showHighscores() {
    // Retrieve highscores from local storage
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Clear any existing content in the highscores list
    highscoresListEl.innerHTML = "";

    // Iterate through the highscores array
    for (let index = 0; index < highscores.length; index++) {
        // Get the current score entry
        let scoreEntry = highscores[index];

        // Create a new list item element
        let listItem = document.createElement("li");

        // Construct the text content for the list item
        let textContent = (index + 1) + ". " + scoreEntry.initials;

        // Set the text content of the list item
        listItem.textContent = textContent;

        // Append the list item to the highscoresListEl 
        highscoresListEl.appendChild(listItem);
    }
};
