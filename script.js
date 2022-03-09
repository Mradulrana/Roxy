const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-list");

const navhandler = () => {
   hamburger.classList.toggle("open");
   navbar.classList.toggle("open");
}
hamburger.addEventListener("click" ,navhandler);