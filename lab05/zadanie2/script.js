
let currentImage = 0;
const images = [
    { src: "berlin_medium.jpeg", border: "5px solid red", alt: "berlin" },
    { src: "sydney_medium.jpeg", border: "5px solid blue", alt: "sydney" },
    { src: "warsaw_medium.jpeg", border: "5px solid green", alt: "warsaw" }
];

document.getElementById('changeButton').addEventListener('click', function() {
    currentImage = (currentImage + 1) % images.length;
    const image = images[currentImage];
    const displayedImage = document.getElementById('displayedImage');
    displayedImage.src = image.src;
    displayedImage.alt = image.alt;
    document.getElementById('imageContainer').style.border = image.border;
});
