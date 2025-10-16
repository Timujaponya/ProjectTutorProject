// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(
    ".navbar .mobile-menu-toggle"
  );
  const mobileMenuItems = document.querySelector(".navbar .mobile-menu-items");

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenuItems.classList.toggle("active");
  });
});

// Change navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
