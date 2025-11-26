/**
 * Shows in the console the name and type of each property in the object.
 * NOTE: To implement this function you must use the for-in loop and indexed access properties
 * @param {object} obj
 */
function showProperties(obj) {
  for (const propName in obj) {   
    const propValue = obj[propName];
    console.log(propName + ": " + typeof(propValue))
  }
}

function testShowProperties() {
  const o = { a: 1, b: "Thor", c: [1, 2, 3], d: { x: 10 } };
  showProperties(o);
  // Output:
  // a: number
  // b: string
  // c: object
  // d: object
}
/**
 * 
 * @param {Array} funcArray an array of functions
 */
function executeFunctions(funcArray) {
  funcArray[0]()
  funcArray[1]()
}

function testExecuteFunctions() {
  function sayHi() {
    console.log("Hi");
  }
  function sayBye() {
    console.log("Bye");
  }

  executeFunctions([sayHi, sayBye]);
  // Output:
  // Hi
  // Bye
}

// testShowProperties();
testExecuteFunctions();

function playWithProperties() {
  const student = {
    name: "Maria",
    id: "81654",
    city: "Lisbon",
  };

  // Dot notation => Operator . to access Object properties
  console.log(student.city);
  console.log(student.name);
  console.log(student.address);

  // Index properties -> Operator [<property name>]
  console.log(student["city"]);
  console.log(student["name"]);
  console.log(student["address"]);
}
