document.addEventListener('DOMContentLoaded', () => {
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById('img01');
    let galleryImages = document.querySelectorAll('.gallery-img');
    let closeBtn = document.querySelector('.close');
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');
    let currentImageIndex;

    galleryImages.forEach((img, index) => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            currentImageIndex = index;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    nextBtn.onclick = function() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImg.src = galleryImages[currentImageIndex].src;
    }

    prevBtn.onclick = function() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImg.src = galleryImages[currentImageIndex].src;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
