var startButton = document.getElementById("start")
var submitInitials = document.getElementById("submit")
var timeDisplay = document.getElementById("time")
var endScreen = document.getElementById("end-screen")
var startScreen = document.getElementById("start-screen")
var questionScreen = document.getElementById("questions")

//var timeRemaining = 0
var interval;
var score;
var answer;

function startQuiz(){
        startScreen.style.display="none";
        questionScreen.style.display = "block";
        timeDisplay.textContent=60;
        quizTimer();

}

function quizTimer(){
    interval = setInterval(function () {
    timeDisplay.textContent--;
    if (parseInt(timeDisplay.textContent) === 0) {
        clearInterval(interval);
        endQuiz();
    }
    } ,1000)
}




startButton.addEventListener("click", startQuiz);