import Fullpage from "fullpage.js";
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
const _ = new Fullpage("#fullpage", {
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
