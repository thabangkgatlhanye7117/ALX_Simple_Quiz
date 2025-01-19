// CHECK ANSWER FUNCTION

function checkAnswer(){
  const correctAnswer = "4";

 const userAnswer = document.querySelector("input[name='quiz']:checked").value;
 const feedBackContent = document.querySelector("#feedback");
 //Comparison between userAnswer and correctAnswer
 if(userAnswer === correctAnswer){

  const feedBackContent = document.querySelector("#feedback");

      feedBackContent.textContent = "Correct! Welldone.";

 } else {

      feedBackContent.textContent = "That's incorrect. Try again "
 }
 
}


// call the button element by Id and add event listener to it

const button = document.getElementById("submit-answer");

button.addEventListener("click", checkAnswer);

  


