var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  if (myAnimal() === 'dog') {
    animal = 'cat';
  }
  return animal
}

function add2(n) {

  return n + 2;

  // Feel free to move things around!
}

function funkyFunction() {
  return function() {
    return "FUNKY!";
  };
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()();
