let currentImageIndex = 0;
const images = ["phone.png", "phone1.png", "phone2.png", "phone3.png", "phone4.png", "phone5.png", "phone6.png"];
const imageElement = document.getElementById('phone');

function changeImage() {
    imageElement.classList.remove('fade-in');
    setTimeout(() => {
        imageElement.src = images[currentImageIndex];
        imageElement.classList.add('fade-in');
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 1000); // Timeout for the fade-out effect
}

setInterval(changeImage, 4000); // Change 4000 to your preferred delay in milliseconds
