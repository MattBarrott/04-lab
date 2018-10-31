console.log("hello");

const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav").classList.toggle("menu-toggle");

const toggleMenu = () => {console.log("called toggleMenu")};
menuToggle.addEventListener("click", toggleMenu);
