const hamburger = document.querySelector(".hamburger");
const NavList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    NavList.classList.toggle("active");
});

// document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     NavList.classList.remove("active");
// }));

function toggleActive(element) {
    const navigationItems = document.querySelectorAll('.nav-item');
    navigationItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}


const ProjectMain = document.querySelector(".project-main");
const ProjectLabel = document.querySelector(".dropdown-arrow");
const ProjectList = document.querySelector(".project-list");

function dropdown(element) {
    const ProjectMain = document.querySelector(".project-main");
    ProjectMain.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}
