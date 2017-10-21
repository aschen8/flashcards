// # Advanced JavaScript Assignment: Constructor Flashcards

// ### Overview

// In this week's assignment, you will create a flashcard command-line game using 
//constructor functions.

// ## Instructions

// The completed game should meet the following criteria:

// 1. The completed game should be able to receive user input using the `inquirer` 
//or `prompt` npm packages.

// 2. Feel free to use as many different types of constructor functions as you are 
//able to, but at a minimum, you must create the following constructor functions:

//   * **Card**: Used to create an object representing a Flashcard. A Flashcard 
//should consist of 2 sides, one representing the keyword/statement and the other the answer. For simplicity, it is recommended to make the answer side's value limited to a maximum of two words.

//   * **Deck**: A collection of Flashcards used to manage the Flashcards.

//   * **CliController**: The CLI Controller should start by listing the available 
//Decks the user has and allow them to select a Deck to view the Flashcards. After
// a deck is selected, the CLI Controller should allow the user to perform 4
// different actions:
//     - 'answer' to check if they know the answer before flipping
//     - 'flip' to see the other side of the Card
//     - 'next' to move onto the next Card
//     - 'exit' to end the game

// 3. You must keep track of the user's guesses and prompt the user if they 
//would like to end the game if none remain

// 4. Each constructor function should be in it's own file and be exported and 
//required wherever needed.

// 5. Look into [function prototypes]
//(https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/) 
//and use them for a few of your constructor's methods.

var inquirer = require("inquirer");
var basicQuestions = require("./flashcards-questions.json");
var counter = 0;
var correctAnswerCount = 0;

var BasicCard = function(frontArg, backArg){
 this.frontArg = frontArg;
 this.backArg = backArg;
};


var askQuestions = function (){

  if(counter < 5){

  inquirer.prompt([

    {type: "input",
      message: basicQuestions[counter].frontCard,
      name: "question"
      }//if


 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].backCard){
          console.log("\nCorrect!");
          correctAnswerCount++;
        }//if

        else{
          console.log("\nWrong!");
        }//else

  console.log(basicQuestions[counter].fullAnswer);
  counter++
  askQuestions();

  });//closing then
} //closing if

else{
  console.log("\nGame Over!")
  console.log("Correct Answers: " + correctAnswerCount);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "playAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.playAgain === true){
        counter = 0;
        correctAnswerCount = 0;
        askQuestions();

      }
      else{
        console.log("Thank you for playing!");
      }

  });
}

}; //closing function

askQuestions();

var questionOne = new BasicCard("What time did the man go to the dentist?", "Tooth Hurty");
// console.log(questionOne.frontArg, questionOne.backArg);

var questionTwo = new BasicCard("What is a chicken coop with four doors?", "chicken sedan");

var questionThree = new BasicCard("Why were the peanuts so nice?", "they're complimentary");


module.exports = BasicCard;