document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        overlay.classList.add('extand');
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('extand');
    });
});
