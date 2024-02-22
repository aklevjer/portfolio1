function toggleMobileNav(burgerBtn, headerNav) {
  const burgerIcon = burgerBtn.firstElementChild;
  const isExpanded = burgerBtn.getAttribute("aria-expanded") === "true";

  burgerBtn.setAttribute("aria-expanded", !isExpanded);

  burgerIcon.classList.toggle("bx-menu", isExpanded);
  burgerIcon.classList.toggle("bx-x", !isExpanded);
  headerNav.classList.toggle("header__nav--open", !isExpanded);
}

export function initMobileNav() {
  const burgerBtn = document.querySelector(".btn--burger");
  const headerNav = document.querySelector(".header__nav");

  burgerBtn.addEventListener("click", () => toggleMobileNav(burgerBtn, headerNav));
}
