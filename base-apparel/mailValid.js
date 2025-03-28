const body = document.querySelector('body');
const mainInput = document.getElementById('mainInput');
const submittedMain = document.getElementById('submittedMain');
const button = document.querySelector('button');
const emailInput = document.getElementById('email');
const errorImg = document.getElementById('errorImg');
const errMsg = document.getElementById('errMsg');
const mailSpan = document.getElementById('mailSpan')
submittedMain.classList.toggle('hide');

function validateEmail() {
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        emailInput.classList.add('invalidMail');
        errorImg.style.visibility = 'visible';
        errMsg.style.visibility = 'visible';
        button.disabled = true;
    } else {
        emailInput.classList.remove('invalidMail');
        errorImg.style.visibility = 'hidden';
        errMsg.style.visibility = 'hidden';
        button.disabled = false;
    }
};

function toggleHide() {
    const email = emailInput.value;
    submittedMain.classList.toggle('hide');
    mainInput.classList.toggle('hide');
    mailSpan.textContent = email;
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail();
    if (!button.disabled) {
        toggleHide();
    }
});



body.addEventListener('keydown', function(event) {
    const dismissBtn = document.getElementById('dismissBtn');
    if (!submittedMain.classList.contains('hide') && event.key === "Enter") {
        event.preventDefault();
        dismissBtn.click();
    }
});