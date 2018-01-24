// var fs = require("fs");
var inquirer = require("inquirer");

var clozeCards = [];
var loop = 1;

// Cloze 
// Take in an entire sentence 
// Ask the person to delete a section called the cloze-delete 
// Store this information in an array called clozeCards

// A ClozeCard  constructor that accetps text  and  cloze  arguments.


function ClozeCard(text, clozeDelete){

	// a method that contains or returns only the cloze-deleted portion of the text
	this.cloze = function(){
		var cloze= clozeDelete;
		console.log("This is the cloze: " + cloze);
	}; 

	// a method that contains or returns only the partial text
	this.partial = function(){
		var partial = text.replace(clozeDelete, "...");
		console.log("This is partial: " + partial);
	};

	// method that contains or returns only the full text.
	this.fullText = function(){
		var fullText = text;
		console.log("This is the full text: " + fullText);
	};

	this.getUserInput = function(){
		if (loop <=10){
 		inquirer.prompt([{
 			name: "fact",
 			message: "Enter a factual statement for the front of card number " + loop + "." 
 		},{ 
			name: "cloze",
			message: "Enter a section of text within that statement, that you would like to hide."

		}]).then(function(answers){
			fact = answers.fact;
			cloze = answers.cloze; 
			
			// call the cloze card constructor function to create a new cloze card
			var newClozeCard = new ClozeCard(fact, cloze);
			clozeCards.push(newClozeCard);
			// console.log("This is the clozeCards array " + clozeCards);
			// newClozeCard.cloze();
			// newClozeCard.partial();
			// newClozeCard.fullText();
			loop++;
			newClozeCard.getUserInput();
		});
	}
	
	};

}


module.exports = ClozeCard; 