//Variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var guessCount = 0;
var guessList = [];

//Generate Random Letter
var correctLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("Correct letter: " + correctLetter);

//Display function
function updateHTML()
{
	var html =
		"<p>Guess what letter I'm thinking of.</p>" +
		"<p id=\"winCount\">Wins: " + winCount + "</p>" +
		"<p id=\"lossCount\">Losses: " + lossCount + "</p>" +
		"<p>Guesses left: " + guessesLeft + "</p>" +
		"<p>Your guesses so far: " + guessList + "</p>";

	document.getElementById("game").innerHTML = html;
}


// Reset 
function reset(outcome)
{
	if (outcome === "win")
	{
		winCount++;
		console.log("YOU WIN");
		document.getElementById("message-win").style.display = "block";

	}
	else if (outcome === "loss")
	{
		lossCount++;
		console.log("YOU LOSE");
		document.getElementById("message-lose").style.display = "block";
	}

	guessesLeft = 9;
	guessList = [];

	// New letter
	correctLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log("Correct letter: " + correctLetter);

	updateHTML();
}


// Key press function
document.onkeyup = function (event)
{
	var guess = event.key.toLowerCase(); 

	console.log("Guess: " + guess);

	document.getElementById("message-win").style.display = "none";
	document.getElementById("message-lose").style.display = "none";

	if (!letters.includes(guess))
	{
		console.log("User pressed: " + guess + " Not a letter. Can't you read?");
		alert("Please press a letter, not a special key.");
		return;
	}

	if (guessList.includes(guess))
	{
		alert("You already guessed " + guess + " dummy. Try a different letter!")
		return;
	}

	if (guess === correctLetter)
	{
		reset("win");
	}
	else
	{
		guessesLeft--;
		guessList.push(guess);
	}

	if (guessesLeft == 0)
	{
		reset("loss");
	}

	updateHTML();
}