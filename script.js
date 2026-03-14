const menuIcon = document.querySelector('nav i');
const menu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');  // toggle visibility
});