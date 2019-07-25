function myanswer(){

var Q1 = document.geoquiz.Q1answer.value;
var Q2 = document.geoquiz.Q2answer.value;
var Q3 = document.geoquiz.Q3answer.value;
var Q4 = document.geoquiz.Q4answer.value;
var Q5 = document.geoquiz.Q5answer.value;


var score = 0 ;

if (Q1 == "Wellington"){
score++;
document.getElementById("score").innerHTML = " your score  is  " + score +" out of 5 " ;}


if (Q2 == "Russia"){
score++;
document.getElementById("score").innerHTML = " your score  is  " + score +" out of 5 " ;}



if (Q3 == "Nairobi"){
score++;
document.getElementById("score").innerHTML = " your score  is  " + score +" out of 5 " ;}


if (Q4 == "Hanoi"){
score++;
document.getElementById("score").innerHTML = " your score  is  " + score +" out of 5 " ;}

if (Q5 == "Budapest"){
score++;
document.getElementById("score").innerHTML = " your score  is  " + score +" out of 5 " ;}

else if ( score == 0 ) {
document.getElementById("score").innerHTML = " your score  is 0";
}

}


function info1() {
document.getElementById("later").style.visibility = "visible";
}


