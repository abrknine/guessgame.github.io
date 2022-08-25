"use strict";

let number = Math.floor(Math.random()*20)+1; // this will genreate random no btw 0-100
 
let attemptleft=20;
let highscore = 0;


document.querySelector(".main1").addEventListener("click",function(){
    const guess= Number(document.querySelector(".main").value);
    console.log(guess);
   
    if(!guess){
        document.querySelector(".sg").textContent="🚫 No Number";
    }
    else if(guess===number){
   document.querySelector(".qm").textContent= number;
   document.querySelector(".sg").textContent="correct answer 🌷";
   document.querySelector("body").style.backgroundColor= "#60b350";
      if(attemptleft>highscore){
          highscore=attemptleft;
      }
      document.querySelector(".score1").textContent=highscore; 
    }
    else if(guess!==number){
        if(attemptleft>1){
        document.querySelector(".sg").textContent= guess>number? "📈TOO HIGH!" :" 📉TOO LOW";
        attemptleft--;
        document.querySelector(".scorenum").textContent=attemptleft;
        }
        else{
            document.querySelector(".sg").textContent="You lost the game";
            document.querySelector(".score1").textContent=0;
            document.querySelector("body").style.backgroundColor= "#ff0000";
        }
    }
}
);

//  game reset
document.querySelector(".btn").addEventListener("click",function(){
      attemptleft=20;
      number = Math.floor(Math.random()*20)+1;
    //   document.querySelector(".score1").textcontent= attemptleft;
      document.querySelector(".scorenum").textContent= attemptleft;
      document.querySelector(".sg").textContent= "START GUESSING ....";
      document.querySelector(".qm").textContent= "?";
      document.querySelector("body").style.backgroundColor= "#000";
      document.querySelector(".main").value=null;
      document.querySelector("body").style.textColor="#000";

});