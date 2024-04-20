// script.js

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add code here to handle form submission, like sending data to a backend server.
    // For now, let's just log the form data.
    const formData = new FormData(this);
    for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    alert("Message sent successfully!"); // You can customize this message or handle success differently.
    this.reset(); // Reset the form after submission
});

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');

    const images = [
        'image1.jpg',
        'image2.jpg',
        // Add more image URLs here
    ];

    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Image';
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `<img src="${image}" alt="Image">`;
            document.body.appendChild(lightbox);
            lightbox.addEventListener('click', function() {
                lightbox.remove();
            });
        });
        
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle the 'active' class on the menu
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            toggleFullscreen(img);
        });
    });

    function toggleFullscreen(img) {
        img.classList.toggle('fullscreen');
    }
});