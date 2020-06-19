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