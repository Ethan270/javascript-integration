
let score = 0; 
let totalQuestions = 0;

var questions = [
    ["What is the chemical symbol for gold?", 0, "Au", "Ag", "Fe"],
    ["What is James Bond's code name?", 2, "005", "006", "007"],
    ["Which one of these foods never go bad?", 0, "Honey", "Dried Beans", "Canned foods"]
];
function initializeGame() {
    score = 0;
    totalQuestions = questions.length;
    playGame();
}
function playGame() {
    if (questions.length === 0) {
        endGame();
        return; 
    }

 const currentQuestion = questions.shift();
  const correctAnswerIndex = currentQuestion[1]; 
 const answers = currentQuestion.slice(2); 
    document.getElementById('question').textContent = currentQuestion[0]; 
 const promptText = "Click the best answer:";
 document.getElementById('prompt').textContent = promptText; 

   
    const answersList = document.getElementById('answers');
 answersList.innerHTML = ''; 
    answers.forEach((answer, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" onclick="checkAnswer(${index}, ${correctAnswerIndex})">${answer}</a>`;
        answersList.appendChild(listItem);
    });
}
/* code to tell user if answer is right and wrong */
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score++; 
        alert("Correct answer!");
    } else {
        alert("Wrong answer. Try again!");
  }
    playGame(); 
}
/* Score display and button to restarrt the game */
function endGame() {
    alert(`Game Over! Your score is ${score} out of ${totalQuestions}.`);
    const promptText = 'Would you like to try again?';
      document.getElementById('prompt').innerHTML = `<p>${promptText}</p>
     <button onclick="location.reload()">Restart Game</button>`;
}

function createPlayButton() {
    const buttonHTML = '<button onclick="initializeGame()">Play Game</button>';
  document.getElementById('prompt').innerHTML = buttonHTML;
}
window.onload= createPlayButton;



    