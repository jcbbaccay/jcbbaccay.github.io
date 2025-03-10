// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        projects.forEach(project => {
            const category = project.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                project.classList.add('show');
            } else {
                project.classList.remove('show');
            }
        });
    });
});

// Show all projects by default
window.addEventListener('DOMContentLoaded', () => {
    projects.forEach(project => project.classList.add('show'));
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animations for sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => observer.observe(section));

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});

// Load dark mode preference from storage
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

