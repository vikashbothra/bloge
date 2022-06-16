// random value generated
  var y= Math.floor(Maths.random() * 10+1)
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
var x = document.getElementById("guessField").Value;

if(x == y)
{
    alert("CONGRATULATIONS!!!"+playername+"YOU GUESSED IT RIGHT IN"+guess+"GUESS");
    guess=1;
}

else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER"); 
}

function playAgain(){
    y = math.floor(math.random()*10+1);
}