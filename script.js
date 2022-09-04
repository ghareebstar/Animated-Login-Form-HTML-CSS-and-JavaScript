var signup_link = document.querySelector('.a1');
var login_link = document.querySelector('.a2');

var signup_form = document.querySelector(".signup-form");
var login_form = document.querySelector(".login-form");

var sign_sub = document.querySelector('.sign');
var log_sub = document.querySelector('.log');


sign_sub.addEventListener('click', signupAlert);
log_sub.addEventListener('click', loginAlert);

function signupAlert() {
    alert('You have successfully signed up.');
}
function loginAlert() {
    alert('You have successfully logged in.');
}


login_link.addEventListener('click', signup_hide);
signup_link.addEventListener('click', login_hide);

function signup_hide() {
    signup_form.style.display = 'none';
    login_form.style.display = 'block';

    // console.log('Hello');
    signup_link.style.background = '#34495e';
    login_link.style.background = '#2981bc';
}
function login_hide() {
    signup_form.style.display = 'block';
    login_form.style.display = 'none';

    // console.log('Hello');
    signup_link.style.background = '#2981bc';
    login_link.style.background = '#34495e';
}