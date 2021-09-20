var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Hello ! What is your name?  ");

console.log("Welcome " + userName.toUpperCase() + " to DO YOU KNOW Aamrapali ?");

function play (question , answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("Right!");
    score = score + 1 ;
  
  }else{
    console.log("Wrong")
  }
  console.log("Current score is : " , score);
  console.log("-----------------------");
}

var questions = [
{
  question:"What is my nick name ? ",
  answer: "rani"
},
{
  question:"Where do I live ? ",
  answer:"kandri"
},
{
  question:"Who is my favorite actor ? ",
  answer:"ranbir"
},
{
  question:"Who is my favorite cricketer? ",
  answer:"virat"
}];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Yay ! You scored : ",score);
