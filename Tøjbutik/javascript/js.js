// Hent burger-ikonet og nav-links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Tilføj en klik-event til burger-ikonet
burger.addEventListener('click', () => {
    navLinks.classList.toggle('menu-active');
});
