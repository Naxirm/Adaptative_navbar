const nvToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

nvToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
