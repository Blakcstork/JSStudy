const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){

    const username = loginInput.value;
    console.log(username);
    /*
    if(username === ""){
        alert("Please write your name!");
    }
    else if(username.length > 15){
        alert("username is too long!");
    }
    else{
        console.log(loginInput.value);
    }
    */
    
}

loginButton.addEventListener("click",onLoginBtnClick);