document.addEventListener('DOMContentLoaded', () => {
    const newPassword = document.getElementById('newPassword');
    const repeatPassword = document.getElementById('repeatPassword');
    const matchMessage = document.getElementById('passwordMatchMessage');

    newPassword.addEventListener('input', validatePassword);
    repeatPassword.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPasswordsMatch()
        }
    });
    repeatPassword.addEventListener('blur', function() {
        checkPasswordsMatch()
    });

    function checkPasswordsMatch() {
        if (newPassword.value === repeatPassword.value) {
            matchMessage.textContent = 'Passwords match.';
            matchMessage.style.color = 'green';
        } else {
            matchMessage.textContent = 'Passwords do not match!';
            matchMessage.style.color = 'red';
        }
    }
});

function validatePassword() {
    const password = document.getElementById('newPassword').value;

    // Validate each requirement
    const lengthValid = password.length >= 8;
    const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const uppercaseValid = /[A-Z]/.test(password);
    const digitValid = /[0-9]/.test(password);

    // Update classes
    document.getElementById('req-length').className = lengthValid ? 'valid' : 'invalid';
    document.getElementById('req-special').className = specialValid ? 'valid' : 'invalid';
    document.getElementById('req-uppercase').className = uppercaseValid ? 'valid' : 'invalid';
    document.getElementById('req-digit').className = digitValid ? 'valid' : 'invalid';

    // Set images for each requirement
    document.getElementById('img-length').src = lengthValid ? 'ok.png' : 'wrong.png';
    document.getElementById('img-special').src = specialValid ? 'ok.png' : 'wrong.png';
    document.getElementById('img-uppercase').src = uppercaseValid ? 'ok.png' : 'wrong.png';
    document.getElementById('img-digit').src = digitValid ? 'ok.png' : 'wrong.png';
}


function toggleVisibility(inputId, toggleIcon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        toggleIcon.src = "eye_open.png"
    }
    else{
        input.type = 'password';
        toggleIcon.src = "eye_not_visible.png"
    }
}
