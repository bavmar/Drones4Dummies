const menu = document.querySelector('#hamburger');
const items = document.querySelector('.menu-items');

function toggleHamburger() {
    menu.classList.toggle('activated');
    items.classList.toggle('activated');
}
