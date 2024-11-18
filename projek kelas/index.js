// toggle
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu");
onclick = () => {
  navbarNav.classList.toggle("active");
};
const hamburger = document.querySelector("#hmburger-menu");

document.addEventListener("clik", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
