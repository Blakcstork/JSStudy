function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_key = "1a3d2d6ed329f9ca123dfeb05c26cf20";
    console.log("I found you!");
    console.log("You live in ", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    console.log("I can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
