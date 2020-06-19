const menuToggle = document.querySelector("#menu-toggle");
const sideMenu = document.querySelector("#side-menu");

const menuClose = document.querySelector("#menu-close");

const loginToggle = document.querySelector("#login-toggle");
const loginMenu = document.querySelector("#login-menu");
const loginLinks = document.querySelector("#login-links");

menuToggle.addEventListener("click", function (event) {
    let menuOpen = sideMenu.classList.contains("active");
    let newMenuOpenStatus = !menuOpen;

    menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
    sideMenu.classList.toggle("active");
});

loginToggle.addEventListener("click", function (event) {

    let menuOpen = sideMenu.classList.contains("active");
    let newMenuOpenStatus = !menuOpen;

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });

    menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
    sideMenu.classList.toggle("active");
    sideMenu.classList.add("logged-in");
    loginLinks.classList.add("active");
});

menuClose.addEventListener("click", function (event) {
    let menuOpen = sideMenu.classList.contains("active");
    let sideMenuOpenStatus = menuOpen;

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    menuToggle.setAttribute("aria-expanded", sideMenuOpenStatus);
    sideMenu.classList.toggle("active");
    sideMenu.classList.remove("logged-in");
    loginLinks.classList.remove("active");
});


document.addEventListener('click', function (event) {

    if (!event.target.matches('.carousel-change')) return;

    console.log(event.target);

    let carousellist = document.getElementsByClassName("carousel-change-swap");

    for (let item of carousellist) {
        if (item.classList.contains("carousel-change-swap")) {
            item.classList.remove("carousel-change-swap");
        }
        event.target.classList.toggle("carousel-change-swap");
    }
}, false);


//Based on https://codepen.io/Nathan_James/pen/BvNLzO
// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let buttonCounter = 0;
const carouselnumbers = document.getElementsByClassName("carousel-numbers");

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -((cardCount / 4) * carouselWidth +
    (cardMarginRight * (cardCount / 4)) -
    carouselWidth - cardMarginRight);

// Add the click events
leftButton.addEventListener("click", function () {
    if (offset !== 0) {
        offset += carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});

rightButton.addEventListener("click", function () {
    if (offset !== maxX) {
        offset -= carouselWidth + cardMarginRight;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});





const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(counter) {
    showSlides(slideIndex += counter);
}

function currentSlide(counter) {
    showSlides(slideIndex = counter);
}

function showSlides(counter) {
    let i;
    if (counter > slides.length) {
        slideIndex = 1
    }
    if (counter < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}