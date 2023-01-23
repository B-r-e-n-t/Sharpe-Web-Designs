
const hamburgerButton = document.getElementById('hamburger-button');
const navBarLinks = document.getElementById('navbar-links');

hamburgerButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElemtns = document.querySelector('.hidden');
hiddenElemtns.forEach((el) => observer.observe(el));


document.querySelector('.submit-btn').addEventListener( () => {
    document.querySelectorAll('.name').value = '';
})