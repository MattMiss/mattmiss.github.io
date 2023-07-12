const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let navIsOpen = false;

// Activate hamburger menu on hamburger selection
hamburger.addEventListener("click", () => {
    openNavMenu();
})

// Close navbar on link selection
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    closeNavMenu();
}))

document.addEventListener("scroll", (e) => {
    console.log("hello");
    if (navIsOpen){
        closeNavMenu();
    }
});

function openNavMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navIsOpen = true;
}

function closeNavMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navIsOpen = false;
}