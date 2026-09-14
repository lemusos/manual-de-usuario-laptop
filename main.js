// main.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Hamburguesa Móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.main-nav');

    const toggleMenu = () => {
        const isActive = mobileMenu.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
        mobileMenu.setAttribute('aria-expanded', isActive);
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        mobileMenu.setAttribute('aria-expanded', 'false');
    };

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', toggleMenu);

        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => link.addEventListener('click', closeMenu));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
                closeMenu();
            }
        });
    }

    // 2. Animaciones Fade-in al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});