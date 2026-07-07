// Ambil elemen paparan dan borang dari HTML
const loginView = document.getElementById('login-view');
const registerView = document.getElementById('register-view');
const forgotView = document.getElementById('forgot-view');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotForm = document.getElementById('forgotForm');

const errorFeedback = document.getElementById('error-feedback');
const successFeedback = document.getElementById('success-feedback');

if (document.getElementById('to-register-link')) {
    document.getElementById('to-register-link').addEventListener('click', function(e) {
        e.preventDefault();
        loginView.classList.add('d-none');
        registerView.classList.remove('d-none');
        if (forgotView) forgotView.classList.add('d-none');
        errorFeedback.classList.add('d-none');
        successFeedback.classList.add('d-none');
    });
}

if (document.getElementById('to-login-link')) {
    document.getElementById('to-login-link').addEventListener('click', function(e) {
        e.preventDefault();
        registerView.classList.add('d-none');
        if (forgotView) forgotView.classList.add('d-none');
        loginView.classList.remove('d-none');
        errorFeedback.classList.add('d-none');
        successFeedback.classList.add('d-none');
    });
}

if (document.getElementById('to-forgot-link')) {
    document.getElementById('to-forgot-link').addEventListener('click', function(e) {
        e.preventDefault();
        loginView.classList.add('d-none');
        registerView.classList.add('d-none');
        forgotView.classList.remove('d-none');
        errorFeedback.classList.add('d-none');
        successFeedback.classList.add('d-none');
    });
}

if (document.getElementById('forgot-to-login-link')) {
    document.getElementById('forgot-to-login-link').addEventListener('click', function(e) {
        e.preventDefault();
        forgotView.classList.add('d-none');
        registerView.classList.add('d-none');
        loginView.classList.remove('d-none');
        errorFeedback.classList.add('d-none');
        successFeedback.classList.add('d-none');
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        const registeredUser = localStorage.getItem('merchant_username');
        const registeredPass = localStorage.getItem('merchant_password');

        if ((usernameInput === "admin@snoopshop.com" && passwordInput === "password123") || 
            (registeredUser && usernameInput === registeredUser && passwordInput === registeredPass)) {
            
            localStorage.setItem('isLoggedIn', 'true');
            
            errorFeedback.classList.add('d-none');
            window.location.href = "dashboard.html";
        } else {
            errorFeedback.textContent = "INVALID CREDENTIALS. PLEASE TRY AGAIN.";
            errorFeedback.classList.remove('d-none');
        }
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = registerForm.querySelectorAll('input');
        const usernameReg = inputs[2].value; // Input tiga  Username
        const passwordReg = inputs[3].value; // Input empat Password

        localStorage.setItem('merchant_username', usernameReg);
        localStorage.setItem('merchant_password', passwordReg);
        
        localStorage.removeItem('isLoggedIn');

        successFeedback.textContent = "REGISTRATION SUCCESSFUL! PLEASE SIGN IN TO CONTINUE.";
        successFeedback.classList.remove('d-none');
        errorFeedback.classList.add('d-none');

        registerForm.reset();

        setTimeout(function() {
            registerView.classList.add('d-none');
            loginView.classList.remove('d-none');
            successFeedback.classList.add('d-none');
        }, 2000);
    });
}

if (forgotForm) {
    forgotForm.addEventListener('submit', function(e) {
        e.preventDefault();
        successFeedback.textContent = "PASSWORD RESET LINK HAS BEEN SENT TO YOUR EMAIL!";
        successFeedback.classList.remove('d-none');
        errorFeedback.classList.add('d-none');

        setTimeout(function() {
            forgotView.classList.add('d-none');
            loginView.classList.remove('d-none');
            successFeedback.classList.add('d-none');
        }, 2000);
    });
}