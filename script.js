document.addEventListener('DOMContentLoaded', function () {

    console.log('Portfolio page loaded');

    // smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // clickable project videos
    document.querySelectorAll('.project-images').forEach(project => {
        project.addEventListener('click', () => {
            window.open(project.dataset.link, '_blank', 'noopener');
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