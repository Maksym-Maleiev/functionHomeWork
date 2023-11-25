// #1: we count with functions
function multiplay(number_1, number_2) {
  var multiplay = number_1 * number_2;
  return multiplay;

  function add(multiplay, number_4) {
    return multiplay + number_4
  }
};

console.log(multiplay(36325, 9824));
console.log(add(multiplay, 777));