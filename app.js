const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is Here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is Gone!";
}


function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

//h1.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);
//h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);