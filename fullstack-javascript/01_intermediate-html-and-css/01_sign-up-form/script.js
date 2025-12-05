document.addEventListener('DOMContentLoaded', () => {
  const createBtn = document.querySelector('#create-btn');
  const inputs = document.querySelectorAll('input');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');

  let missingFields = false;

  const resetFields = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (input.value.trim() !== '') {
        input.style.borderColor = 'black';
      }
    });
  });

  createBtn.addEventListener('click', () => {
    missingFields = false;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        console.log(input);
        input.style.borderColor = 'red';
        missingFields = true;
      }
    });

    if (missingFields) {
      alert('all fields are required');
      return;
    }

    if (password.value !== confirmPassword.value) {
      password.style.borderColor = 'red';
      confirmPassword.style.borderColor = 'red';
      alert('passwords must match');
      return;
    }

    const user = {};
    inputs.forEach((input) => {
      if (input.id !== 'confirm-password') {
        user[input.id] = input.value;
      }
    });

    console.log(user);

    resetFields();
  });
});
