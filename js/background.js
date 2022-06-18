const images = [
    "0.jpg", "1.jpg","3.jpg","4.jpg","5.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)]

bgImage = new Image();
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);