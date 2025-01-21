document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Award Image Hover Effect (Console Log Example)
const awardImages = document.querySelectorAll('.award-image');
awardImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        console.log(`Hovered over: ${image.alt}`);
    });
});

// Button Click Example
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

// Dynamic Header Color on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#1565c0';
    } else {
        header.style.backgroundColor = '#2196f3';
    }
});
