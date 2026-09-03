document.addEventListener("DOMContentLoaded", function () {

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("menu");

  // Toggle menu when hamburger is clicked
  hamburgerBtn.addEventListener("click", function () {
    hamburgerBtn.classList.toggle("active");
    menu.classList.toggle("open");
  });

  // Close menu when a menu link is clicked
  const menuLinks = document.querySelectorAll(".menu ul li a");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburgerBtn.classList.remove("active");
      menu.classList.remove("open");
    });
  });

});