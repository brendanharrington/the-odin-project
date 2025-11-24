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

document.addEventListener('DOMContentLoaded', () => {
  const firstNumber = document.querySelector('#first-number');
  const secondNumber = document.querySelector('#second-number');
  const operator = document.querySelector('#operator-select')
  const calculateBtn = document.querySelector('#calculate-btn');
  const output = document.querySelector('output');

  const resetFields = () => {
    firstNumber.value = '';
    secondNumber.value = '';
  };

  calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    switch (operator.value) {
      case '+':
        output.textContent = add(firstNumber.value, secondNumber.value);
        resetFields();
        break;

      case '-':
        output.textContent = subtract(firstNumber.value, secondNumber.value);
        resetFields();
        break;

      case '*':
        output.textContent = multiply(firstNumber.value, secondNumber.value);
        resetFields();
        break;

      case '/':
        output.textContent = divide(firstNumber.value, secondNumber.value);
        resetFields();
        break;

      default:
        break
    };
  });
});
