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

const handleSubmit = (expression) => {
  const found = expression.match(OPERATORS);
  let result;

    if (!found) {
      console.log('returning');
      return;
    }

    if (expression[expression.length - 1].match(OPERATORS)) {
      result = 'SyntaxError';
      return;
    }

    const operator = found[0];
    const [num1, num2] = expression.split(operator);
    result = operate(num1, num2, operator);
    return result;
};

const updateDisplay = (action, prev = null, newChar = null) => {
  let result;

  switch (action) {
    case 'ADD':
      if (prev === 'Cannot divide by zero!') {
        result = newChar;
        break;
      }

      result = prev + newChar;
      break;
    case 'DELETE':
      if (prev === 'Cannot divide by zero!') {
        result = '';
        break;
      }

      result = prev.slice(0, -1);
      break;
    case 'CLEAR':
      break;
    default:
      break;
  }
  

  return result;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const numberBtns = document.querySelectorAll('.number-btn');
  const operatorBtns = document.querySelectorAll('.operator-btn');

  const backspaceBtn = document.querySelector('.backspace-btn');
  const clearBtn = document.querySelector('.clear-btn');
  const equalsBtn = document.querySelector('.equals-btn');
  const decimalBtn = document.querySelector('.decimal-btn');

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
      case '+':
      case '*':
      case '/':
      case '.':
        input.value = updateDisplay('ADD', input.value, event.key);
        break;
      case 'Backspace':
        input.value = updateDisplay('DELETE', input.value, event.key);
        break;
      case 'c':
        input.value = '';
        break;
      case 'Enter':
        input.value = handleSubmit(input.value);
        break;
      default:
        break;
    }
  });

  [...numberBtns, ...operatorBtns, decimalBtn].forEach(btn => {
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

  equalsBtn.addEventListener('click', (event) => {
    const found = input.value.match(OPERATORS);

    if (!found) {
      console.log('returning');
      return;
    }

    if (input.value[input.value.length - 1].match(OPERATORS)) {
      input.value = 'SyntaxError';
      return;
    }

    console.log(found)

    const operator = found[0];
    const [num1, num2] = input.value.split(operator);
    input.value = operate(num1, num2, operator);
    
  });
});
