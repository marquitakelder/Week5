var username = document.getElementById('username');

var user = document.querySelector('#user');

var password = document.querySelector('#password');

var userLabel = document.querySelector('#userLabel');

var passLabel = document.querySelector('label[for=password]');

var rememberMe = document.querySelector('input[type=checkbox]');

var submitBtn = document.querySelector('#submit');

var logoutBtn = document.getElementById('logout');

username.addEventListener('focus', function (e) {
    userLabel.classList.add("blue");
    username.classList.add("blue-border");
});

username.addEventListener('blur', function (e) {
    userLabel.classList.remove("blue");
    username.classList.remove("blue-border");
});

password.addEventListener('focus', function (e) {
    passLabel.classList.add("blue");
    password.classList.add("blue-border");
});

password.addEventListener('blur', function (e) {
    passLabel.classList.remove("blue");
    password.classList.remove("blue-border");
}); 

rememberMe.addEventListener('click', function (e) {
    if(rememberMe.checked) {
        alert("We will remember your username.");
    } 
});

submitBtn.addEventListener('click', function (e) {
        e.preventDefault(); if(username.value === "" && password.value === "") {
        userLabel.classList.add("error");
        username.classList.add("label","error");
        passLabel.classList.add("error");
        password.classList.add("label","error");
    }
        else if(username.value === "") {
            userLabel.classList.add("error");
            username.classList.add("label","error");
            passLabel.classList.remove("error");
            password.classList.remove("label","error");
    }
        else if(password.value === "") {
            userLabel.classList.remove("error");
            username.classList.remove("label","error");
            passLabel.classList.add("error");
            password.classList.add("label","error");
    }
        else { console.log("...test");
            if (rememberMe.checked) {
                localStorage.setItem("username", username.value);
                sessionStorage.setItem("user", username.value);
            }
            else {
                localStorage.removeItem("username");
            }
            userLabel.classList.remove("error");
            username.classList.remove("label","error");
            passLabel.classList.remove("error");
            password.classList.remove("label","error");
            // user.innerHTML = username.value;
            // username.value = "";
            // password.value = "";
            // username.disabled = true;
            // password.disabled = true;
    }
});

window.addEventListener('load', function() {
    if (localStorage.getItem("username") !== null) {
        console.log(localStorage.getItem("username"));
        username.value = localStorage.getItem("username");
        rememberMe.checked = true;
    }
    else if(sessionStorage.getItem("user") !== null) {
        user.value = sessionStorage.getItem("user");
    }
});

logoutBtn.addEventListener('click', function(e) {
        sessionStorage.clear();
        window.location.replace('index.html');
});


