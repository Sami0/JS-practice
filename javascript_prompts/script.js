function myFunction() 

{var name = prompt(" what is your name?");
alert("Hello " + name +" i need to ask you a few more questions");
console.log("the user name is " + name) ;

var location =prompt("where do you live  ?");
alert(location + " is nice ");
console.log( name + " live in " + location);

var age =prompt(" how old are you? ");
console.log(name +" age is  " + age);

var source =prompt(" how did you hear about us ?");
console.log(  name  +" heard about the site through " + source);

var reason =prompt(" what do you use the site for ?");
console.log(  name + " use the website to " + reason);
}

function quiz()
{ 
var ocean =prompt
  ("how much of the ocean have we explored ?\n\n more than 10%  \n\n  less than 1% \n\n less than 5% \n\n less than 0.005% ");
if  ( ocean=="less than 5%") { 
 alert(" your answer is correct !");}
   
