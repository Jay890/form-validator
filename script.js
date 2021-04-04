const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const inputValidationArray = [username, email, password, password2];

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

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(email);
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArray) {
  // high order array method
  inputArray.forEach(function (inputItem) {
    if (inputItem.value.trim() === '') {
      showError(inputItem, `${getFieldName(inputItem)} is required`);
    } else {
      showSuccess(inputItem);
    }
  });
}

function checkPasswordsMatch(input, input2) {
  if (input.value !== input2.value)
    return showError(input, `Passwords do not match.`);
}

// get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase();
}

// check field length
function checkLength(input, minLength, maxlength) {
  if (input.value.length < minLength || input.value.length > maxlength) {
    showError(
      input,
      ` ${getFieldName(
        input
      )} must be at least ${minLength} and less than ${maxlength} `
    );
  } else {
    showSuccess(input);
  }
}

// Event Listeners
form.addEventListener('submit', function (e) {
  // prevent the form from submitting so we can check validation as no backend to submit to
  e.preventDefault();

  // checkRequired([username, email, password, password2]);
  checkRequired(inputValidationArray);
  checkLength(username, 3, 10);
  checkEmail(email);
  checkLength(password, 6, 20);
  checkLength(password2, 6, 20);
  checkPasswordsMatch(password, password2);
});
