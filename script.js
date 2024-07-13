
document.querySelectorAll('a[href^="file:///C:/Users/waghm/OneDrive/Desktop/Portfolio/index.html"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    
    const images = document.querySelectorAll('.slider img');
    let currentImageIndex = 0;

    
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    setInterval(nextImage, 3000);

    showImage(currentImageIndex);
});

