//  Calculator logic 

let display = document.getElementById('display');  // Reference to display element
let currentInput = '';  // Stores current expression input by the user
let memory = 0;         // Stores memory value for memory operations

// Appends a number or operator to the current input

function append(value) {
if (currentInput === '0' && value !== '.') currentInput = '';

const lastChar = currentInput.slice(-1);
if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
return;
}

currentInput += value;
display.textContent = currentInput;
}

// Clears the display and resets input
function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

// Evaluates the expression and displays the result
function calculate() {
try {
const result = eval(currentInput);
currentInput = parseFloat(result.toFixed(10)).toString();
display.textContent = currentInput;
} catch (e) {
display.textContent = 'Error';
currentInput = '';
}
}

// Calculates square root of the current input
function sqrt() {
  try {
    currentInput = Math.sqrt(eval(currentInput)).toString();
    display.textContent = currentInput;
  } catch (e) {
    display.textContent = 'Error';
  }
}

// Converts current input to percentage
function percent() {
  try {
    currentInput = (eval(currentInput) / 100).toString();
    display.textContent = currentInput;
  } catch (e) {
    display.textContent = 'Error';
  }
}

// Adds current input to memory
function memoryAdd() {
  try {
    memory += parseFloat(currentInput || 0);
  } catch (e) {}
}

// Subtracts current input from memory
function memorySubtract() {
  try {
    memory -= parseFloat(currentInput || 0);
  } catch (e) {}
}

// Recalls the memory value and displays it
function memoryRecall() {
  currentInput = memory.toString();
  display.textContent = currentInput;
}

// Clears the memory
function memoryClear() {
  memory = 0;
}