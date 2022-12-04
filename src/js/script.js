const headerEl = document.querySelector(".header");
const menuTogglerBtn = document.querySelector(".header__nav-toggler");
const wrapper = document.querySelector(".wrapper");

menuTogglerBtn.addEventListener("click", () => {
  headerEl.classList.toggle("active");
  wrapper.classList.toggle("u-static");
});

window.addEventListener("resize", () => {
  if (headerEl.classList.contains("active")) {
    headerEl.classList.remove("active");
  }

  if (wrapper.classList.remove("u-static")) {
    wrapper.classList.remove("u-static");
  }
});
