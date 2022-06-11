const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


const link = document.querySelector("a");

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)//show the form 
}


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;


    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    paintGreetings(username);

}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)//show the form
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}

link.addEventListener("click", handleLinkClick);