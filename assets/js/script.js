// DOM elements
const emailInput = document.getElementById('email-input');
const errorEmailMessage = document.getElementById('email-error-message');
const submitBtn = document.getElementById('submit-btn');

// Function to display message
const showMessage = (message, color) => {
    errorEmailMessage.textContent = message;
    errorEmailMessage.classList.remove('hidden', 'text-LightRed', 'text-Cyan');
    errorEmailMessage.classList.add(color);
};

// Interacting with submit button and email input element
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
        showMessage('Please enter an email address', 'text-LightRed');
    } else if (!isValidEmail) {
        showMessage('Please provide a valid email address', 'text-LightRed');
    } else {
        showMessage('Email sent!', 'text-Cyan');
        emailInput.value = '';
    }
});