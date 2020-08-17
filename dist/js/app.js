const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");
const list = document.querySelectorAll(".header li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  list.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `listFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
});

document.addEventListener("scroll", () => {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    header.style.backgroundColor = "rgb(0, 42, 75)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const btnfront = document.querySelector(".front");
const btngraph = document.querySelector(".graph");
const frontEnd = document.querySelector(".front-end");
const graphics = document.querySelector(".graphics");

btngraph.addEventListener("click", () => {
  graphics.classList.remove("hidden");
  graphics.classList.add("show");
  frontEnd.classList.remove("show");
  frontEnd.classList.add("hidden");
  btngraph.classList.add("current");
  btnfront.classList.remove("current");
});
btnfront.addEventListener("click", () => {
  graphics.classList.remove("show");
  graphics.classList.add("hidden");
  frontEnd.classList.remove("hidden");
  frontEnd.classList.add("show");
  btngraph.classList.remove("current");
  btnfront.classList.add("current");
});
