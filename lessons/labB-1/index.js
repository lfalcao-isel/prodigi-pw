// Named function
function add(a, b) {
  return a + b;
}

// Lambda - aka Arrow functions
const sub = (a, b) => a - b;

// Passagem de uma Função como Parametro a outra Funcção
/**
 * @param {function} f a function to be called
 * @param {number} x a number to be passed to f
 * @param {number} y another number to be passed to f
 */
function callAndPrint(f, x, y) {
  const res = f(x, y);
  console.log(res);
}


/**
 * Returns the result of applying g to the 
 * result of f(value).
 * I.e. g(f(value))
 * 
 * @param {function} f 
 * @param {function} g 
 * @package {number} value
 */
function compose(f, g, value) {
    return g(f(value))
}

function square(a) {
  return a * a;
}

function sqrt(a) {
  return Math.sqrt(a)
}

console.log(compose(square, sqrt, 3))
console.log(compose(square, (n) => Math.sqrt(n), 3))
console.log(compose(square, Math.sqrt, 3))

// console.log("4 + 6 = " + add(4, 6));
// console.log("11 - 3 = " + sub(11, 3));
// callAndPrint(add, 4, 6); // > 10
// callAndPrint((a, b) => a * b, 4, 6); // > 24
