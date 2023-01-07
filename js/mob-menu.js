const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
menuBtnRef.classList.remove("is-open");
menuBtnRef.addEventListener("click", () => {
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

  menuBtnRef.classList.toggle("is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);

  mobileMenuRef.classList.toggle("is-open");

  const cross = menuBtnRef.querySelector(".icon-cross");
  const menu = menuBtnRef.querySelector(".icon-menu");
  cross.style.display = cross.style.display === "inline" ? "none" : "inline";
  menu.style.display = menu.style.display === "none" ? "inline" : "none";
});
