const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Activate hamburger menu on hamburger selection
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Close navbar on link selection
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))