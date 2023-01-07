const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
const pageHeader = document.querySelector(".page-header");
const navHeader = document.querySelector(".page-header nav");
const container = document.querySelector(".container");
const page = document.querySelector(".page");

const mobSiteNavLinks = document.querySelectorAll(".mob-site-nav__link");


menuBtnRef.classList.remove("is-open");
menuBtnRef.addEventListener("click", () => {
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  mobSiteNavLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('mob-site-nav__link--current');
    } else {
      link.classList.remove('mob-site-nav__link--current');
    }
});

  navHeader.classList.toggle("hidden");
  if (window.location.href.split("/")[3] == "portfolio.html") {
    const features = document.querySelector(".features");
    features.classList.toggle("features-hidden");
  }
  menuBtnRef.classList.toggle("is-open");
  pageHeader.classList.toggle(".remove-bottom-padding");
  container.classList.toggle("remove-paddings");
  page.classList.toggle("overflow-hidden");
  menuBtnRef.setAttribute("aria-expanded", !expanded);

  mobileMenuRef.classList.toggle("is-open");

  const cross = menuBtnRef.querySelector(".icon-cross");
  const menu = menuBtnRef.querySelector(".icon-menu");
  cross.style.display = cross.style.display === "inline" ? "none" : "inline";
  menu.style.display = menu.style.display === "none" ? "inline" : "none";
});
