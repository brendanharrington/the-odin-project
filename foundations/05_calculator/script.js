const OPERATORS = /\+|\-|\*|\//;

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
  if (num2 == 0) {
    return 'Cannot divide by zero!';
  }
  return Number(num1) / Number(num2);
};

const operate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return add(num1, num2);

    case '-':
      return subtract(num1, num2);

    case '*':
      return multiply(num1, num2);

    case '/':
      return divide(num1, num2);

    default:
      break;
  };
};

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const numberBtns = document.querySelectorAll('.number-btn');
  const operatorBtns = document.querySelectorAll('.operator-btn');

  const backspaceBtn = document.querySelector('.backspace-btn');
  const clearBtn = document.querySelector('.clear-btn');
  const equalsBtn = document.querySelector('.equals-btn');
  const decimalBtn = document.querySelector('.decimal-btn');

  numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      input.value += btn.textContent;
    });
  });

  operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      input.value += btn.textContent;
    });
  });

  backspaceBtn.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
  });

  decimalBtn.addEventListener('click', () => {
    input.value += '.';
  });

  equalsBtn.addEventListener('click', (event) => {
    const found = input.value.match(OPERATORS);

    if (found) {
      const operator = found[0];
      const [num1, num2] = input.value.split(operator);
      input.value = operate(num1, num2, operator);
    }
  });
});
