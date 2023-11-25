// #1: we count with functions
var multiplay = function (number_1, number_2) {
  return number_1 * number_2;
};

var add = function (multiplay, number_3) {
    return multiplay + number_3;
};

console.log(multiplay(36325, 9824));
console.log(add(multiplay, 777)); 