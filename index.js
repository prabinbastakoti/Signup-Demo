
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector('input[name="confirmpassword"]');
const error = document.querySelector('.error');


confirmPassword.addEventListener('keyup', (event) => {
    if (password.value != event.target.value) {
        error.textContent = "*Password did not match";
    }
    else {
        error.innerHTML = '&nbsp;';
    }
})