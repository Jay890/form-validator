const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error functions

function showError(input, message) {
  const formControl = input.parentElement;
  // overwriting the classname
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  //manipulating the DOM to grabb the parent element which has color border property
  const formControl = input.parentElement;
  /* overwriting the classname to our css class .form-control success 
  to show that css code to get green border */
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Event Listeners
form.addEventListener('submit', function (e) {
  // prevent the form from submitting so we can check validation as no backend to submit to
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'Password is required');
  } else {
    showSuccess(password2);
  }
});
