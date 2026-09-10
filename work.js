// ============================================
// WORK / PORTFOLIO
// ============================================

(function () {
    'use strict';

    // Projects data
    const projects = [
        {
            id: 1,
            title: 'Digital Banking Platform',
            category: 'design',
            year: '2026',
            description: 'Modern banking experience with focus on financial wellness.',
            tags: ['UX Research', 'UI Design']
        },
        {
            id: 2,
            title: 'Health & Wellness App',
            category: 'design',
            year: '2025',
            description: 'User-centered design for mental health and wellbeing.',
            tags: ['UX Research', 'UI Design']
        },
        {
            id: 3,
            title: 'E-Commerce Platform',
            category: 'development',
            year: '2025',
            description: 'Full-stack e-commerce solution with modern architecture.',
            tags: ['React', 'Node.js']
        },
        {
            id: 4,
            title: 'Design System',
            category: 'design',
            year: '2024',
            description: 'Scalable design system for enterprise applications.',
            tags: ['Design Tokens', 'Components']
        },
        {
            id: 5,
            title: 'Portfolio Website',
            category: 'development',
            year: '2024',
            description: 'Personal portfolio with modern design and animations.',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 6,
            title: 'UX Research Study',
            category: 'research',
            year: '2024',
            description: 'Comprehensive UX research for a healthcare application.',
            tags: ['User Interviews', 'Surveys']
        }
    ];

    // Build project card HTML
    const buildProjectCard = (project, index) => `
        <article class="work-item" data-id="${project.id}">
            <div class="work-thumbnail">
                <div class="placeholder">Project ${String(index + 1).padStart(2, '0')}</div>
            </div>
            <div class="work-info">
                <div class="meta">
                    <span class="number">${String(index + 1).padStart(2, '0')}</span>
                    <span class="category">${project.tags.slice(0, 2).join(' · ')}</span>
                </div>
                <h3>${project.title}</h3>
                <p class="desc">${project.description}</p>
                <a href="work-detail.html?id=${project.id}" class="view-link">
                    View case study <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `;

    // Render projects
    const renderProjects = (containerId, filter = 'all') => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filtered = filter === 'all'
            ? projects
            : projects.filter(p => p.category === filter);

        container.innerHTML = filtered.map((p, i) => buildProjectCard(p, i)).join('');

        // Re-trigger animations
        if (window.animateOnScroll) {
            const newItems = container.querySelectorAll('.work-item');
            newItems.forEach((el, index) => {
                const delay = (index % 4) * 0.1;
                el.style.transitionDelay = `${delay}s`;
            });
            window.animateOnScroll(newItems);
        }
    };

    // Render preview on index.html
    const renderPreview = () => {
        const container = document.getElementById('workGrid');
        if (!container) return;

        const preview = projects.slice(0, 3);
        container.innerHTML = preview.map((p, i) => buildProjectCard(p, i)).join('');

        if (window.animateOnScroll) {
            window.animateOnScroll(container.querySelectorAll('.work-item'));
        }
    };

    // Filter buttons on work.html
    const initFilters = () => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        if (!filterBtns.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects('workGridFull', btn.dataset.filter);
            });
        });
    };

    // Init
    document.addEventListener('DOMContentLoaded', () => {
        renderPreview();
        renderProjects('workGridFull', 'all');
        initFilters();
    });
})();