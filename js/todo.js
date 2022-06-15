const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];
const TODOS_KEYS = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEYS,JSON.stringify(toDos));
}



function deleteToDo(event){
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
    const hateChinese = 100;


}


function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


function sayHello(item){
    console.log("This is the turn off", item);
}


const savedToDos = localStorage.getItem(TODOS_KEYS);
console.log(savedToDos);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
}