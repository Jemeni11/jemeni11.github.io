const form = document.forms["firstForm"]

const firstName = form['firstName']
const firstNameError = document.querySelector('#div--firstName > p')
const firstNameValid = "First Name cannot be empty"

const lastName = form['lastName']
const lastNameError = document.querySelector('#div--lastName > p')
const lastNameValid = "Last Name cannot be empty"

const eMail = form['eMail']
const eMailError = document.querySelector('#div--email > p')
const eMailValid = "Looks like this is not an email"

const password = form['password']
const passwordError = document.querySelector('#div--password > p')
const passwordValid = "Password cannot be empty"

const primary_red = 'hsl(0, 100%, 74%)'
const neutral_grayish_blue = 'hsl(246, 25%, 77%)'
const neutral_dark_blue = 'hsl(249, 10%, 26%)'

firstName.addEventListener('input', function(event){
  if (firstName.value.trim() === "") {
    firstNameError.className = 'error'
    firstName.className = 'error-icon'
    firstName.style.borderColor = primary_red
    firstNameError.textContent = firstNameValid
  } else {
    firstNameError.innerText = '';
    firstNameError.className = '';
    firstName.className = ''
    firstName.style.borderColor = neutral_grayish_blue
    firstName.style.color = neutral_dark_blue
  }
})

lastName.addEventListener('input', function(event){
  if (lastName.value.trim() === "") {
    lastNameError.className = 'error'
    lastName.className = 'error-icon'
    lastName.style.borderColor = primary_red
    lastNameError.textContent = lastNameValid
  } else {
    lastNameError.innerText = '';
    lastNameError.className = '';
    lastName.className = ''
    lastName.style.borderColor = neutral_grayish_blue
    lastName.style.color = neutral_dark_blue
  }
})

eMail.addEventListener('input', function(event){
  if (eMail.value.trim() === "") {
    eMailError.className = 'error'
    eMail.className = 'error-icon'
    eMail.style.borderColor = primary_red
    eMailError.textContent = 'You need to enter an e-mail address.';
  } else if (eMail.validity.typeMismatch) {
    eMailError.className = 'error'
    eMail.className = 'error-icon'
    eMail.style.borderColor = primary_red
    eMailError.textContent = eMailValid
  } else {
    eMailError.innerText = '';
    eMailError.className = '';
    eMail.className = ''
    eMail.style.borderColor = neutral_grayish_blue
    eMail.style.color = neutral_dark_blue
  }
})

password.addEventListener('input', function(event){
  if (password.value.trim() === "") {
    passwordError.className = 'error'
    password.className = 'error-icon'
    password.style.borderColor = primary_red
    passwordError.textContent = passwordValid
  } else {
    passwordError.innerText = '';
    passwordError.className = '';
    password.className = ''
    password.style.borderColor = neutral_grayish_blue
    password.style.color = neutral_dark_blue
  }
})
