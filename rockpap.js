let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Generate computer choice

const genCompChoice = () =>{
  const options = ["rock", "paper", "scissors"]; //array of 3 indexes
  //Math.random[Generate a random numbers]
 //and multiply that number to 3 to get index of array 
 //because we have an array of 3 indexes it will giv us a value 0,1,2(array indexes) 
 //Math.floor fun[remove all the decimal points from random number]
  let ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];

}
const draGame = () =>{
  
  msg.innerText ="Game was Draw!.play again.";
  msg.style.backgroundColor ="#081b31";
};

const showWinner = (userwin, userChoice, compChoice) =>{
   if (userwin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
   }else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";
   }
};
const playGame = (userChoice) =>{
    
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
      //Draw game
      draGame();
    }else{
      let userwin =true;
      if (userChoice === "rock"){
        //scissors, paper
        userwin = compChoice === "paper" ? false : true;
      }else if(userChoice === "paper"){
        //rock, scissors
        userwin = compChoice === "scissors" ? false : true;
      }else {
        //rock,paper
        userwin = compChoice ==="rock" ? false : true;
      }
      showWinner(userwin, userChoice, compChoice);
    }
    
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);


  });
});