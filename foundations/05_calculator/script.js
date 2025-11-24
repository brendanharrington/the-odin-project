const add = (num1, num2) => {
  return Number(num1) + Number(num2);
};

const subtract = (num1, num2) => {
  return Number(num1) - Number(num2);
};

const multiply = (num1, num2) => {
  return Number(num1) * Number(num2);
};

const divide = (num1, num2) => {
  return Number(num1) / Number(num2);
};

console.log(add('4', '5')); // output: 9
console.log(subtract('4', '5')); // output: -1
console.log(multiply('4', '5')); // output: 20
console.log(divide('4', '5')); // output: 0.8