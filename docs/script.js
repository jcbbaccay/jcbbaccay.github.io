// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark mode on switch click
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});
