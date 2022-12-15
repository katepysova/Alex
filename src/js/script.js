import Fullpage from "fullpage.js";
import Swiper, { Navigation } from "swiper";
import { mediaQueries } from "./constants.js";

const headerEl = document.querySelector(".header");
const menuTogglerBtn = document.querySelector(".header__nav-toggler");
const html = document.querySelector("main");

menuTogglerBtn.addEventListener("click", () => {
  headerEl.classList.toggle("active");
  html.classList.toggle("u-static");
});

window.addEventListener("resize", () => {
  if (headerEl.classList.contains("active")) {
    headerEl.classList.remove("active");
  }

  if (html.classList.remove("u-static")) {
    html.classList.remove("u-static");
  }
});

// eslint-disable-next-line no-unused-vars
const fullpage = new Fullpage("#fullpage", {
  licenseKey: process.env.FULLPAGE_JS_KEY || "",
  responsiveWidth: mediaQueries.breakpointExtraLarge,
  autoScrolling: true,
  fadingEffect: true,
  css3: true,
  easingcss3: "ease-in",
  fitToSection: true,
  scrollOverflow: false,
  scrollBar: true,
  keyboardScrolling: true,
  recordHistory: false,
});

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-custom-button-next",
    prevEl: ".swiper-custom-button-prev",
  },
  slidesPerView: "auto",
  loop: false,
  slidesPerGroup: 1,

  breakpoints: {
    [mediaQueries.breakPointExtraSmall]: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    [mediaQueries.breakPointSmall]: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    [mediaQueries.breakPointMedium]: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
    [mediaQueries.breakpointLarge]: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
    [mediaQueries.breakpointExtraLarge]: {
      slidesPerView: 3,
      spaceBetween: 56,
    },
  },
});
