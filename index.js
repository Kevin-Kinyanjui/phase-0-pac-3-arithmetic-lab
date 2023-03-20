
let number = 20;

function add() {
    return (number + 5);
  }
console.log(add()); 

function subtract() {
    return (number - 5);
  }
console.log(subtract())

function multiply() {
    return (number * 5);
  }
console.log(multiply()); 
  
function divide() {
    return (number / 5);
  }
  console.log(divide()); 

function add(a, b) {
    return (a + b);
  }
console.log(add(2,3)); 

function subtract(a, b) {
    return (a - b);
  }
console.log(subtract(5,3)); 

function multiply(a, b) {
    return (a * b);
  }
console.log(multiply(2,3)); 

function divide(a, b) {
    return (a / b);
  }
console.log(divide(2,3)); 

function increment(a) {
    return (a += 1);
  }
console.log(increment(2));

function decrement(a) {
    return (a -= 1);
  }
console.log(decrement(3));

function preserveDecimal() {
    return parseFloat("cocacola");
    }
console.log(preserveDecimal());

function preserveDecimal(n) {
    return parseFloat(n);
    }
console.log(preserveDecimal(2.2));


function makeInt() {
    return{ 
      inttrue: parseInt("2", 10),
      intfalse: parseInt("hell0", 10)
    }
    }
const result = makeInt();
let int1 = result.inttrue;
let intnull = result.intfalse;
console.log(int1); 
console.log(intnull);
