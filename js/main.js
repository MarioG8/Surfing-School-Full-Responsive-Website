// Dom items 
const body = document.querySelector('body');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animations 
gsap.registerPlugin(ScrollTrigger);

gsap.from('.ani-hero', {
    duration: 0.8,
    opacity: 0,
    y: -330,
    stagger: 0.5

});

gsap.from('.ani-services', {
    scrollTrigger: '.ani-services',
    duration: 0.5,
    opacity: 1,
    x: -200,
    stagger: 0.12
});

gsap.from('.ani-img', {
    scrollTrigger: '.services',
    duration: 1.2,
    opacity: 0,
    x: 200
});

gsap.from('.ani-mem', {
    scrollTrigger: '.membership',
    duration: 1,
    opacity: 0,
    y: -200,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.ani-card', {
    scrollTrigger: '.membership__wrapper',
    duration: 1,
    opacity: 0,
    y: -200,
    stagger: 0.2,
    delay: 0.3
});

gsap.from('.ani-team', {
    scrollTrigger: '.team',
    duration: 1,
    opacity: 0,
    y: -200,
    stagger: 0.3,
    delay: 0.2
});

gsap.from('.ani-contact', {
    scrollTrigger: '.contact',
    duration: 0.8,
    opacity: 0,
    y: -200,
    stagger: 0.25,
    delay: 0.8
});


// Close menu after click link or resize window 
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 959 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

