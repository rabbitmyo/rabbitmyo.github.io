
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;
bgImage.classList.add("bgimg");
bgImage.classList.add("main");
document.body.appendChild(bgImage);
