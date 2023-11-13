    // Carousel, about page, code //



document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('#image-container img.javascript');
    
    function showImage(index) {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Set interval for carousel effect
    setInterval(nextImage, 3500); // Change image every 3.5 seconds
});


