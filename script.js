document.addEventListener('DOMContentLoaded', function () {

    console.log('Art page loaded');

    // smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // clickable artwork videos
    document.querySelectorAll('.artwork-images[data-link]').forEach(container => {
    container.addEventListener('click', () => {
        window.open(container.dataset.link, '_blank', 'noopener');
    });
});

    // lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    // open lightbox on image click
    document.querySelectorAll(".popup-img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = img.src;
        });
    });

    // close box button
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // click outside image to closes it
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

});