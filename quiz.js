// CHECK ANSWER FUNCTION

function checkAnswer(){
      const correctAnswer = "4";

//Retriever and feedback variable
      let userAnswer = document.querySelector("input[name='quiz']:checked").value;

      let feedBackContent = document.getElementById("feedback");


 //Comparison between userAnswer and correctAnswer
    if (userAnswer === correctAnswer){

      feedBackContent.textContent = "Correct! Welldone.";

     } else {

      feedBackContent.textContent = "That's incorrect. Try again! "
      }
 
}


// call the button element by Id and add event listener to it.

let button = document.getElementById("submit-answer");

button.addEventListener("click", checkAnswer);

  


