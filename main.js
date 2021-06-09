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

var textWrapper = document.querySelector('.center-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.center-text .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.center-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });