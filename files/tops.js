
document.getElementById('dropdown-button').addEventListener('click', function(event) {
var navMenu = document.getElementById('nav-ul-id');
navMenu.classList.toggle('is-visible');
event.stopPropagation(); // Prevent event from bubbling up
});

document.addEventListener('click', function(event) {
    var navMenu = document.getElementById('nav-ul-id');
    if (!navMenu.contains(event.target) && event.target.id !== 'dropdown-button') {
        navMenu.classList.remove('is-visible');
    }
});
