// #1: we count with functions
/*
function multiplay(number_1, number_2) {
  var number_3 = number_1 * number_2;
  return number_3;
};

function add(number_3, number_4) {
    return number_3 + number_4
};

console.log(add(multiplay(36325, 9824), 777));
*/

function add (number_1, number_2) {
  return number_1 + number_2;
};

function multiplay(number_3, number_4) {
  var number_1 = number_3 * number_4;
  return number_1;
};

console.log(add(multiplay(36325, 9824), 777));

// 2: are these arrays the same?
function areArraysSame(array_1, array_2) {
  if (array_1.length !== array_2.length) {
    return false;
  };

  for (var i = 0; i < areArraysSame.length; i++){
    if (array_1[i] === array_2[i]) {
    return true;
    };

  if (array_1[i] !== array_2[i]) {
    return false;
    };
  };
};
 
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));

console.log(areArraysSame([1, 2, 3], [1, 2, 3]));

console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// #3: we create a "HangMan" game using functions
var words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "hogwarts",
  "potion",
  "alohomora",
  "magic",
  "ring",
  "elf"
];

var pickWord = function () {
  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) { 
    answerArray[i] = "_";
  }
  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

var getGuess = function () {
  return prompt("Guess a letter, or click Cancel to stop playing.");
};

var updateGameState = function (guess, word, answerArray) {
  for (var j = 0; j < word.length; j++){
    if (word[i] === guess && answerArray[j] === "_") {
      answerArray[i] = guess;
    }
  }
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  alert(answerArray.join(" "));
  if (guess > 0) {
    alert("Good job! The answer was " + word);
  } else {
    alert("It's OK! Try on later! The answer was " + word);
  }
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var guessTrying = 12;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    --guessTrying;
    guess = guess.toLowerCase();
    var correctGuess = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuess;
  }
}

console.log(showAnswerAndCongratulatePlayer(answerArray));