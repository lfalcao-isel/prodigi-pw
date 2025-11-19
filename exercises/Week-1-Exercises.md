# JavaScript Exercises

## 1. Working with Objects and Arrays, implement the following functions:

### 1.1 `function showProperties(obj)`

Receives an object `obj`.
Shows in the console the name and type of each property in the object.

**Example:**

```javascript
const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}}
showProperties(o)
// Output:
// a: number
// b: string
// c: object
// d: object
```

---

### 1.2 `function executeFunctions(funcArray)`

Receives an array `funcArray`.
Executes all functions present in the array, assuming they do not receive parameters.

**Example:**

```javascript
function sayHi() { console.log('Hi') }
function sayBye() { console.log('Bye') }

executeFunctions([sayHi, "Opps", ,sayBye])
// Output:
// Hi
// Bye
```

---

### 1.3 `function filterProduct(products, minPrice)`

Receives an array `products` (objects with at least a `price` property) and a number `minPrice`.
Returns a new array containing only the products whose price is greater than `minPrice`.

**Example:**

```javascript
const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]

const expensive = filterProduct(products, 4)
// expensive: [
//   {name: 'Apple', price: 5},
//   {name: 'Orange', price: 10}
// ]
```

---

### 1.4 `function mapProduct(products)`

Receives an array `products`.
Returns a new array containing only the names of the products.

**Example:**

```javascript
const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]

const names = mapProduct(products)
// names: ['Apple', 'Orange', 'Banana']
```

---

### 1.5 `function reduceProduct(products)`

Receives an array `products`.
Returns the total sum of the prices of all products.

**Example:**

``` javascript
const products = [
  {name: 'Apple', price: 5},
  {name: 'Orange', price: 10},
  {name: 'Banana', price: 3}
]

const total = reduceProduct(products)
// total: 18
```

### 1.6 `function filter(array, predicate)`

Recebe um array `array` e uma função `predicate`.  
A função `predicate` é uma função que recebe um elemento do array como argumento e retorna `true` ou `false`, conforme o elemento deve ou não ser incluído no novo array.

Exemplo:

```javascript
    const numbers = [1, 2, 3, 4, 5];
    const even = filter(numbers, n => n % 2 === 0);
    // even: [2, 4]
```

### 1.7 `function map(array, transformation)`

Recebe um array `array` e uma função `transformation`.  
A função `transformation` recebe um elemento do array como argumento e retorna um novo valor, que será colocado na posição correspondente no novo array.

Exemplo:

```javascript
    const numbers = [1, 2, 3];
    const doubled = map(numbers, n => n * 2);
    // doubled: [2, 4, 6]
```

### 1.8 `function reduce(array, operation, [initialValue])`

Recebe um array `array`, uma função `operation` e, opcionalmente, um valor inicial `initialValue`.  
A função `operation` recebe dois argumentos: o acumulador (`accumulator`) e o elemento atual do array (`element`).  
A cada iteração, retorna o próximo valor do acumulador. O resultado final é o valor acumulado.

Exemplo:
    const numbers = [1, 2, 3, 4];
    const sum = reduce(numbers, (acc, n) => acc + n, 0);
    // sum: 10


## 2. Modularity and Testing

### 2.1 ECMAScript Module

Include the two functions from **Exercise 1.6 and 1.7** in an **ECMAScript module** so that they can be imported and reused.  
Create a separate module containing example code that imports this module and demonstrates how to call the functions.  

### 2.2 Unit Tests with Mocha

Write a set of **unit tests** for the function in **Exercise 1.7** using the **Mocha** testing framework.  
The tests should verify that the function behaves correctly with various inputs, including edge cases.

---

## 3. Console Customization

Write a JavaScript function that overrides the default `console.log` behavior so that every message logged to the console is automatically prefixed with the current date and time.  

**Note:** You can use `Date()` to get a string with the current date and time in the default format.  

**Example:**

```javascript
console.log("Hello, world!");
```
Output:
```
Mon Sep 15 2025 10:42:30 GMT+0000 (Coordinated Universal Time) - Hello, world!
```

