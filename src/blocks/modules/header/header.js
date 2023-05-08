const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", () => {
    if (headerNav.classList.contains("header__nav_active")) {
        headerNav.classList.remove("fadeInLeft");
        headerNav.classList.add("fadeOutLeft");
        headerBurger.classList.remove("header__burger_opened");
        headerBurger.classList.add("header__burger_closed");
        setTimeout(() => {
            headerNav.classList.remove("fadeOutLeft");
            headerNav.classList.remove("animated");
            headerNav.classList.remove("header__nav_active");
            headerBurger.classList.remove("header__burger_closed");
        }, 1000);
    } else {
        headerNav.classList.add("animated");
        headerNav.classList.add("header__nav_active");
        headerNav.classList.add("fadeInLeft");
        headerBurger.classList.add("header__burger_opened");
    }
    
});

let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header.header").style.top = "0";
    } else {
        document.querySelector("header.header").style.top = "-78px";
    }

    prevScrollpos = currentScrollPos;
});
