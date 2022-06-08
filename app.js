const loginForm = documnet.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginSubmit(event){

    event.preventDefault();

    const username = loginInput.value;
    console.log(username);

}

loginForm.addEventListener("submit", onLoginSubmit);

