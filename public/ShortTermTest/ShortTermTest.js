// import { InputField } from '../shadow/answersInputField.js';

// function startGame begins the countdown timer for the Memory Game.
// TODO: Create game loop.
// TODO: Implement incrementStage function.
// Loop back to beginning.
// TODO: Produce table of results for the user.
function startGame() {
  const start = document.querySelector('.start');
  start.addEventListener('click', () => {
    start.style.visibility = 'hidden';
    countDown();
    setTimeout(() => {
      generateText(2);
    }, 3000);
    setTimeout(() => {
      hideRandomText();
    }, 3000);
    setTimeout(() => {
      userAnswers();
    }, 6000);
    // incrementStage();
    // loop back to start
    // results();
  });
}

function countDown() {
  let interval = 2;
  const timer = document.querySelector('.countdown');

  timer.textContent = 'Starting in 3...';

  const counter = setInterval(() => {
    timer.textContent = 'Starting in ' + interval + '...';
    interval -= 1;
  }, 1000);

  setTimeout(() => {
    clearInterval(counter);
    timer.style.visibility = 'hidden';
  }, 3000);
}

// function generateText generates a string of random letters for the user to remember.
function generateText(length) {
  const randomText = document.createElement('p');
  randomText.className = 'randomText';
  for (let i = 0; i < length; i++) {
    const character = getRandomInt('A'.codePointAt(0), 'Z'.codePointAt(0) + 1);
    randomText.textContent = randomText.textContent + ' ' + String.fromCodePoint(character);
  }
  document.querySelector('.game').appendChild(randomText);
}

function hideRandomText() {
  setTimeout(() => {
    document.querySelector('.randomText').style.visibility = 'hidden';
  }, 3000);
}

// TODO: Retrieve input data from the user and store in memory.
function userAnswers() {
  const InputField = document.createElement('input-field');
  document.querySelector('.game').appendChild(InputField);
}

// courtesy of MDN Web Docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// remember to pick a max that is one unit larger than the largest value you want to include.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function pageLoaded() {
  startGame();
}

pageLoaded();
