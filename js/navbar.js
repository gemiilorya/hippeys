
const navbar = document.getElementById("navbar");

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-slate-900", "shadow-lg");
    } else {
        navbar.classList.remove("bg-slate-900", "shadow-lg");
        navbar.classList.add("bg-transparent");
    }
}

window.addEventListener("scroll", updateNavbar, {
    passive: true
});

updateNavbar();
