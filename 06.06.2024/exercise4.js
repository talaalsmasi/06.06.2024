document.addEventListener("DOMContentLoaded", function() {
    const pwForm = document.getElementById('pwForm');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const pw1Check = document.getElementById('pw1_check');
    const pw2Check = document.getElementById('pw2_check');
    const submitBtn = document.getElementById('submitBtn');

    function validatePasswordLength() {
        if (password1.value.length < 6) {
            pw1Check.textContent = "Password must be at least 6 characters long.";
            return false;
        } else {
            pw1Check.textContent = "";
            return true;
        }
    }

    function validatePasswordMatch() {
        if (password1.value !== password2.value) {
            pw2Check.textContent = "Passwords do not match.";
            return false;
        } else {
            pw2Check.textContent = "";
            return true;
        }
    }

    password1.addEventListener('input', validatePasswordLength);
    password2.addEventListener('input', validatePasswordMatch);

    pwForm.addEventListener('submit', function(event) {
        const isPasswordValid = validatePasswordLength();
        const isMatchValid = validatePasswordMatch();
        if (!isPasswordValid || !isMatchValid) {
            event.preventDefault();
        }
    });
});