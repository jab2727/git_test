// This hides form items on switch click.
// credit: https://stackoverflow.com/questions/74852314/how-can-i-change-between-a-login-sign-up-form

var create = document.getElementById("signup");
var haveAcc = document.getElementById("login");
var formLogin = document.getElementsByClassName("exposed")
var formCreateAcc = document.getElementsByClassName("hidden")

console.log(formLogin.length);
console.log(formCreateAcc.length);

function switchToLogin() {
    for (let i=0;i<formCreateAcc.length;i++){
        formCreateAcc[i].style.cssText += 'display: none;'
    }
    for (let i=0;i<formLogin.length;i++){
        formLogin[i].style.cssText -= 'display: none;'
    }
}

switchToLogin(); 

function switchToSignup() {
    for (let i=0;i<formLogin.length;i++){
        formLogin[i].style.cssText += 'display: none;'
    }
    for (let i=0;i<formCreateAcc.length;i++){
        formCreateAcc[i].style.cssText -= 'display: none;'
    }
}

create.addEventListener("click", function(e) {
    console.log("Signup button clicked.")
    switchToSignup(); 
});

haveAcc.addEventListener("click", function(e) {
    switchToLogin();
});
 
// --------------------------------------

