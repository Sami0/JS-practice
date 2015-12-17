

function myFunction()

{
var correct = 0 ;

var answer1 = prompt("what is the captial city of New zeland ? \n\n 1-Auckland \n\n 2-Melbourne \n\n3-Wellington ");
if ( answer1.toUpperCase() === 'WELLINGTON') {
correct += 1;
}

                     
 var answer2 = prompt( "what is the country that has the largest surface area ? \n\n 1-United States \n\n  2-Russia \n\n  3-China");
if (answer2.toUpperCase() ==='RUSSIA'){
  correct += 1;
}

var answer3 = prompt ("what is the captial city of Kenya ? \n\n  1-Mombasa \n\n  2-Addis Ababa  \n\n 3-Nairobi")
if ( answer3.toUpperCase() ==='NAIROBI'){
  correct += 1;
}

var answer4 = prompt ("what is the captial city of Vietnam ? \n\n 1-Hanoi \n\n  2-Manila  \n\n 3-Jakarta ")
if ( answer4.toUpperCase() ==='HANOI'){
  correct += 1;
}
 var answer5 = prompt ("what is the capital city of  Hungary ? \n\n  1-Copenhagen \n\n 2-Budapest \n\n  3-Amesterdam" )  
 if ( answer5.toUpperCase() ==='BUDAPEST'){
  correct += 1;   }               
   
document.write("the result is "+ correct +" out of 5 questions correct.");
   }
