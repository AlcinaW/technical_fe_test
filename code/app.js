//MENU CONSTANTS
const menuToggle = document.querySelector("#menu-toggle");
const sideMenu = document.querySelector("#side-menu");
const menuClose = document.querySelector("#menu-close");
//LOGIN MENU CONSTANTS
const loginToggle = document.querySelector("#login-toggle");
const loginMenu = document.querySelector("#login-menu");
const loginLinks = document.querySelector("#login-links");
//CAROUSEL ARROW CONSTANTS
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

//open hamburger menu
menuToggle.addEventListener("click", function (event) {
    let menuOpen = sideMenu.classList.contains("active");
    let newMenuOpenStatus = !menuOpen;

    menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
    sideMenu.classList.toggle("active");
});
//opens login menu and scrolls to bottom
loginToggle.addEventListener("click", function (event) {

    let menuOpen = sideMenu.classList.contains("active");
    let newMenuOpenStatus = !menuOpen;
    //scrolls to page bottom
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });

    menuToggle.setAttribute("aria-expanded", newMenuOpenStatus);
    sideMenu.classList.toggle("active");
    sideMenu.classList.add("logged-in");
    loginLinks.classList.add("active");
});
//closes menu
menuClose.addEventListener("click", function (event) {
    let menuOpen = sideMenu.classList.contains("active");
    let sideMenuOpenStatus = menuOpen;
    //resets page to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    menuToggle.setAttribute("aria-expanded", sideMenuOpenStatus);
    sideMenu.classList.toggle("active");
    sideMenu.classList.remove("logged-in");
    loginLinks.classList.remove("active");
});

//moves carousel to numbered slide
document.addEventListener('click', function (event) {
    if (!event.target.matches('.carousel-change')) return;
    let carousellist = document.getElementsByClassName("carousel-change-swap");
    for (let item of carousellist) {
        if (item.classList.contains("carousel-change-swap")) {
            item.classList.remove("carousel-change-swap");
        }
        event.target.classList.toggle("carousel-change-swap");
    }
}, false);
//resets carousel to first slide
leftArrow.addEventListener("click", function (event) {
    let carousellist = document.getElementsByClassName("carousel-change");

    for (let item of carousellist) {
        if (item.classList.contains("carousel-change-swap")) {
            item.classList.remove("carousel-change-swap");
        }
    }
    carousellist[0].classList.add("carousel-change-swap");
});
//sets carousel to last slide
rightArrow.addEventListener("click", function (event) {
    let carousellist = document.getElementsByClassName("carousel-change");

    for (let item of carousellist) {
        if (item.classList.contains("carousel-change-swap")) {
            item.classList.remove("carousel-change-swap");
        }
    }
    carousellist[4].classList.add("carousel-change-swap");
});