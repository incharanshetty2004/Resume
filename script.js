// Simple JavaScript for future enhancement
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded successfully!");
});
// Select all project titles
const projectTitles = document.querySelectorAll('.project-title');

// Add click event listeners to each project title
projectTitles.forEach(title => {
    title.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const description = title.nextElementSibling; // Get the next sibling (description)
        description.classList.toggle('active'); // Toggle the 'active' class
    });
});

