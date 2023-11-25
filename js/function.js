// #1: we count with functions
var add = function (number_3, number_4) {
  number_3 = multiplay();
  return number_3 + number_4;
};

var multiplay = function (number_1, number_2) {
  return number_1 * number_2;
};

multiplay(36325, 9824);
add(multiplay, 777); 
console.log(multiplay, add);