document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');

    showSignup.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLogin.addEventListener('click', function(event) {
        event.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        validateSignupForm();
    });

    function validateSignupForm() {
        const username = document.getElementById('signupUsername').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value.trim();

        let isValid = true;

        // Username validation
        if (username.length < 3) {
            showError('usernameError', 'Username must be at least 3 characters');
            isValid = false;
        } else {
            hideError('usernameError');
        }

        // Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            showError('emailError', 'Enter a valid email');
            isValid = false;
        } else {
            hideError('emailError');
        }

        // Password validation
        if (password.length < 6) {
            showError('passwordError', 'Password must be at least 6 characters');
            isValid = false;
        } else {
            hideError('passwordError');
        }

        if (isValid) {
            // Form is valid, proceed with form submission or further processing
            alert('Signup successful!');
        }
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
});
