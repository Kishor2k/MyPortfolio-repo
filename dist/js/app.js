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
