var fs = require("fs");
var inquirer = require("inquirer");

// A  BasicCard  constructor that accepts front and back  arguments.

// BASIC 
// Prompt the user to give both a front and a back to a flashcard. 
// Repeat 10x
// Store that information in an array called basicCards


var basicCards = [];
var loop = 1;
var quizLoop = 0;
var score = 0;

function BasicCard(front,back){

	this.front = front;
	this.back = back; 
	this.getUserInput = function(){
		if (loop <=10){
			inquirer.prompt([{
				name: "question",
				message: "Enter a question for the front of card number " + loop + "." 
			},{ 
				name: "correctAnswer",
				message: "Enter the answer to the question"

			}]).then(function(answers){
				question = answers.question;
				answer = answers.correctAnswer; 
				
				// Create a new instance of a basic card and push it to 
				var newBasicCard = new BasicCard(question,answer);
				basicCards.push(newBasicCard);
				// console.log("This is the basicCards array " + basicCards);				

				loop++;
				newBasicCard.getUserInput();
						
			}) 

		}
	}	
}



module.exports = BasicCard;
