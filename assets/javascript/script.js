let questions = [
    {
        id: 1,
        questions: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        option: [
            "<script>",
            "<scripting>",
            "<js>",
            "<javascript>"
        ]
    },

    {
        id: 2,
        questions: "Where is the correct place to insert a JavaScript?",
        answer: "Both the <head> secctin and the <body> section are correct",
        option: [
            "The <head> section",
            "Both the <head> secctin and the <body> section are correct",
            "The <body> section",
            "None of the above"
        ]
    },

    {
        id: 3,
        questions: "What is the default value of the position property?",
        answer: "static",
        option: [
            "static",
            "relative",
            "fixed",
            "absolute"
        ]
    },

    {
        id: 4,
        questions: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        option: [
            "Creative Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets"
        ]
    },

    {
        id: 5,
        questions: "Choose the correct HTML element for the largest heading:",
        answer: "<h1>",
        option: [
            "<heading>",
            "<head>",
            "<h1>",
            "<h6>"
        ]
    },

    {
        id: 6,
        questions: "What is the correct HTML element for inserting a line break?",
        answer: "<br>",
        option: [
            "<br>",
            "<break>",
            "<lb>",
            "<line break>"
        ]
    },
];

let question_count = 0;

window.onload = function() {
    show(question_count);
};

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = '<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option=group">
        <li class="option">${first}</li>
        <li class="option">${second}</li>
        <li class="option">${thirdt}</li>
        <li class="option">${fourth}</li>
    </ul>';
    toggleActive();
}

function toogleActive() {
    let option = document.querySelectorAll("li.option");
    for(let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for(let i=0; i < option.length; i++) {
                if(option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}