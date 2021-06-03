function show() {
    document.getElementById('navbar').classList.toggle('active');
}

const navBtn = document.querySelector('.navbar-bttn');
let navOpen = false;
navBtn.addEventListener('click', () => {
    if(!navOpen) {
        navBtn.classList.add('open');
        navOpen = true;
    }
    else {
        navBtn.classList.remove('open');
        navOpen = false;
    }
});

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});

var modalBtn = document.querySelector('.modal-btn-1');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});