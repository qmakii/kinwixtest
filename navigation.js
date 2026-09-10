// ============================================
// NAVIGATION
// ============================================

(function () {
    'use strict';

    // Header scroll effect
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.style.overflow = isActive ? 'hidden' : '';
            hamburger.setAttribute('aria-expanded', isActive);
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Scroll progress indicator
    const progressBtn = document.querySelector('.scroll-progress');
    if (progressBtn) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percentage = maxHeight > 0 ? Math.round((scrolled / maxHeight) * 100) : 0;

            progressBtn.textContent = percentage + '%';
            progressBtn.classList.toggle('visible', scrolled > 500);
        }, { passive: true });

        progressBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();