let secretNumber = Math.trunc((Math.random() * 20) + 1); //Math.random() gives random float number between 0(inclusive) and 1(exclusive), to get random number between 0 and 20, we are multiplying with 20 and since it will give non-integer value between 0 and 20(exclusive), we are using Math.trunc() also adding 1 to it to get number between 0 and 20.

//intial score is 20 which will decrease by 1 with each wrong answer
let score = 20;
let highScore = 0;

//this is to change the text content of message paragraph with the given message. for <div>, <p> tags, we have textcontent property to change the text or retrieve the text whereas to do the same for input tags we have value property
function displayMessage(message)
{
    document.querySelector(".message").textContent = message;
}

//callback or function of Check button
function clickHandlerOfCheck()
{
    let guess = Number(document.querySelector(".guess").value); //converting the value of input DOM element to Number since by default it's object
    
    //when no number is entered
    if(!guess) //within if condition guess will work as boolean
        displayMessage("⛔️ No Number");

    //if number is entered, then we need to check whether it's matching with the secret number of not    
    else
    {
        //if the guess number matches with the secret number then user wins the game
        if(guess === secretNumber)
        {
            displayMessage("🎉 Correct Number!");

            //when user will win, we will show the secret number to the user, background color of the body will change to green
            document.querySelector(".number").textContent = secretNumber; //assigning the textcontent of DOM element where class is "number"
            document.querySelector(".number").style.width = "30rem";
            document.body.style.backgroundColor = "green"; //changing the background color of body. Another way of selecting a tag from document using javascript. we can do the same using this way also //document.querSelector("body").style.backgroundColor = "green";

            //if the current score is greater than the high score then update the high score
            if(score > highScore)
            {
                highScore = score;
                document.querySelector(".highscore").textContent = score;
            }
        }
        //if the guess number doesn't match with the secret number then we need to check whether the guess number is greater or smaller than the secret number, also we need to reduce the score
        else
        {
            if(score > 1)
            {
                //we can optimize the code of this if block using ternary operator
                // if(guess > secretNumber)
                // {
                //     displayMessage("Too high!");
                //     score--;
                //     document.querySelector(".score").textContent = score;
                // }
                // else
                // {
                //     displayMessage("Too low!");
                //     score--;
                //     document.querySelector(".score").textContent = score;
                // }

                displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
                score--;
                document.querySelector(".score").textContent = score; //updating the textcontent of DOM element where class name is "score"
            }
            else //score is 0 means user lost the game.
            {
                displayMessage("💥 You lost the game!");
                document.querySelector(".score").textContent = 0;
            }            
        }
    }          
}

//callback or function of Again button - function of Again button will reset the content of page after winning the game to initial except highscore of previous stage
function clickHandlerOfAgain()
{
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";

    score = 20;
    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";    
    
    document.body.style.backgroundColor = "#222";
}

//Buttons and associated events, callbacks or functions
let btnCheck = document.querySelector(".check"); //selecting the object from document which has "check" as class name, here selecting the check button
btnCheck.addEventListener("click", clickHandlerOfCheck); //adding the event and the function of the button with it

let btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", clickHandlerOfAgain);