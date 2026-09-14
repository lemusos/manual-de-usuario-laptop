document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Hamburguesa Móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.main-nav');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
        });

        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navMenu.classList.remove('is-active');
            });
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



    document.addEventListener('DOMContentLoaded', () => {
    const latitudeBtn = document.getElementById('latitude-btn');
    const latitudeDropdown = document.getElementById('latitude-dropdown');

    if (latitudeBtn && latitudeDropdown) {
        latitudeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            latitudeDropdown.classList.toggle('is-open');
        });

        // Cierra el menú automáticamente al tocar fuera de él
        document.addEventListener('click', () => {
            latitudeDropdown.classList.remove('is-open');
        });
    }
});
});