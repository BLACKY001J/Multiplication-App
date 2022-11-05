const myScore = document.getElementById("score");
const question = document.getElementById("question");
const input = document.getElementById("input");
const form = document.getElementById("form");

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

question.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAnswer = num1*num2;

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
myScore.innerText = `score: ${score}`;

form.addEventListener('submit', ()=>{
    let userAnswer = +input.value;
    if(userAnswer===correctAnswer){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}