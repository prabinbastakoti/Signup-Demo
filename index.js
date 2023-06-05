
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector('input[name="confirmpassword"]');
const error = document.querySelectorAll('.error');


confirmPassword.addEventListener('keyup', (event) => {
    if (password.value != event.target.value) {
        error.forEach(item => {
            item.textContent = "*Password did not match";
            password.style.border = '1px solid red';
            confirmPassword.style.border = '1px solid red';
        });
    }
    else {
        error.forEach(item => {
            item.textContent = "";
            password.style.border = '1px solid blue';
            confirmPassword.style.border = '1px solid blue';
        });
    }
})