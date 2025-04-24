const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const section = document.querySelectorAll("section");

menu.addEventListener("click", (e) => {
  menu.classList.toggle("change");
  navbar.classList.toggle("change");
  section.forEach((sect) => {
    sect.classList.toggle("change");
  });
});
section.forEach((sect) => {
  sect.addEventListener("click", (e) => {
    menu.classList.remove("change");
    navbar.classList.remove("change");
    sect.classList.remove("change");
  });
});
