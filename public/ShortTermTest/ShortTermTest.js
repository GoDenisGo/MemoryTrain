// function startGame begins the countdown timer for the Memory Game.
function startGame() {
  const start = document.querySelector('.start');
  start.addEventListener('click', () => {
    start.style.visibility = 'hidden';
    countDown();
    generateText();
  });
}

function countDown() {
  let interval = 2;
  const stage = document.querySelector('.stage');

  stage.textContent = 'Starting in 3...';

  const counter = setInterval(() => {
    stage.textContent = 'Starting in ' + interval + '...';
    interval -= 1;
  }, 1000);

  setInterval(() => {
    clearInterval(counter);
  }, 3000);
}

// function generateText generates a string of random letters for the user to remember.
// TODO: Implement function generateText.
function generateText() {

}

function pageLoaded() {
  startGame();
}

pageLoaded();
