var startButton = document.getElementById("start")
var submitInitials = document.getElementById("submit")
var timeDisplay = document.getElementById("time")
var endScreen = document.getElementById("end-screen")
var startScreen = document.getElementById("start-screen")
var questionScreen = document.getElementById("questions")


function startQuiz(){
        startScreen.style.display="none";
        timeDisplay.textContent=60;
        quizTimer();
        showQuestions();
        createQuestions();
}

function quizTimer(){
    interval = setInterval(function () {
    timeDisplay.textContent--;
    if (parseInt(timeDisplay.textContent) === 0) {
        clearInterval(interval);
        questionQuiz();
    }
    } ,1000)
}

function showQuestions(){
  questionScreen.className = "start"

}



startButton.addEventListener("click", startQuiz);