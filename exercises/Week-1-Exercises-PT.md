# Exercícios de JavaScript

## 1. Trabalhar com Objetos e Arrays, implementar as seguintes funções:

### 1.1 `function showProperties(obj)`

Recebe um objeto `obj`.
Mostra na consola o nome e tipo de cada propriedade no objeto.

**Exemplo:**

```javascript
const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}}
showProperties(o)
// Output:
// a: number
// b: string
// c: object
// d: object
```

NOTAS:

- Para implementar esta função deve usar o ciclo for-in e acesso indexado a propriedades
  
---

### 1.2 `function executeFunctions(funcArray)`

Recebe um array `funcArray`.
Executa todas as funções presentes no array, assumindo que não recebem parâmetros.

**Exemplo:**

```javascript
function sayHi() { console.log('Hi') }
function sayBye() { console.log('Bye') }

executeFunctions([sayHi, "Opps", ,sayBye])
// Resultado:
// Hi
// Bye
```

---

### 1.3 `function filterProduct(products, minPrice)`

Recebe um array `products` (objetos com pelo menos uma propriedade `price`) e um número `minPrice`.
Retorna um novo array contendo apenas os produtos cujo preço é superior a `minPrice`.

**Exemplo:**

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

Recebe um array `products`.
Retorna um novo array contendo apenas os nomes dos produtos.

**Exemplo:**

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

Recebe um array `products`.
Retorna a soma total dos preços de todos os produtos.

**Exemplo:**

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
```javascript
    const numbers = [1, 2, 3, 4];
    const sum = reduce(numbers, (acc, n) => acc + n, 0);
    // sum: 10
```

<!---## 2. Modularity and Testing

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

-->
