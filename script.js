// Questions
const questions = [
{
question:"😂 Who gets angry first?",
answers:["Mayur 😄","Kajal 😅","Both 😂"]
},
{
question:"🍕 Who steals food from the other's plate?",
answers:["Mayur","Kajal","Both ❤️"]
},
{
question:"😍 Who says 'I love you' more?",
answers:["Mayur","Kajal","Both Forever ❤️"]
},
{
question:"🏔️ Our favourite vacation together?",
answers:["Shimla ❤️","Maldives","Goa"]
},
{
question:"💖 Who is the luckiest person?",
answers:["Mayur ❤️","Kajal ❤️","Both because we found each other"]
}
];

let current = 0;

const questionBox = document.getElementById("questionBox");
const answers = document.getElementById("answers");

// Start Journey
function startJourney(){

document.getElementById("welcome").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");

loadQuestion();

}

// Load Question
function loadQuestion(){

questionBox.innerHTML = questions[current].question;

answers.innerHTML = "";

questions[current].answers.forEach(answer=>{

let btn=document.createElement("button");

btn.className="answerBtn";

btn.innerHTML=answer;

btn.onclick=nextQuestion;

answers.appendChild(btn);

});

}

// Next Question
function nextQuestion(){

current++;

if(current<questions.length){

loadQuestion();

}else{

document.getElementById("quiz").classList.add("hidden");
document.getElementById("gallery").classList.remove("hidden");

}

}

// Show Letter
function showLetter(){

document.getElementById("gallery").classList.add("hidden");

document.getElementById("letter").classList.remove("hidden");

}

// Final Page
function showFinal(){

document.getElementById("letter").classList.add("hidden");

document.getElementById("final").classList.remove("hidden");

}

// Celebration
function celebrate(){

alert("❤️ Yay! Forever Together ❤️");

startConfetti();

}

// --------------------
// Simple Confetti
// --------------------

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

let confetti=[];

function startConfetti(){

confetti=[];

for(let i=0;i<200;i++){

confetti.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height-canvas.height,

r:Math.random()*6+4,

d:Math.random()*200,

speed:Math.random()*3+2

});

}

animateConfetti();

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{

ctx.beginPath();

ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

c.y+=c.speed;

if(c.y>canvas.height){

c.y=-20;

}

});

requestAnimationFrame(animateConfetti);

}
