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
