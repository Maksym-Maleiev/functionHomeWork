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
 
console.log(areArraysSame([1, 2, 3], [1, 2]));