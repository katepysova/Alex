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
  scrollOverflow: true,
  fadingEffect: true,
  css3: true,
  easingcss3: "ease-in",
  fitToSection: true,
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
  spaceBetween: 16,

  breakpoints: {
    [mediaQueries.breakPointSuperSmall]: {
      slidesPerView: 1.1,
      spaceBetween: 24,
    },

    [mediaQueries.breakPointExtraSmall]: {
      slidesPerView: 1.3,
      spaceBetween: 24,
    },

    [mediaQueries.breakPointSmall]: {
      slidesPerView: 2,
      spaceBetween: 36,
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

const portfolioProjectLinks = document.querySelectorAll(
  ".portfolio__card-link"
);
portfolioProjectLinks.forEach((link) => {
  const tooltip = link.querySelector(".tooltiptext");
  link.addEventListener("mouseout", () => {
    tooltip.innerHTML = "Copy to clipboard";
  });
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(link.getAttribute("href") || "#");
    tooltip.innerHTML = "Copied to clipboard";
  });
});

const careerTabs = document.querySelectorAll(".career__tab-button");
careerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!tab.classList.contains("career__tab-button--active")) {
      document
        .querySelectorAll(".career__tab-button")
        .forEach((t) => t.classList.remove("career__tab-button--active"));
      document
        .querySelectorAll(".career__tab-content")
        .forEach((contentItem) =>
          contentItem.classList.remove("career__tab-content--active")
        );
      const id = tab.getAttribute("data-tab");
      const activeTabContent = document.getElementById(id);
      tab.classList.add("career__tab-button--active");
      activeTabContent.classList.add("career__tab-content--active");
    }
  });
});

const defaultTab = document.querySelector(".career__tab-button.defalt-tab");
if (defaultTab) {
  defaultTab.click();
}
/*
const contactsFormName = document.querySelector(".contacts__form-name");
const contactsFormEmail = document.querySelector(".contacts__form-email");
const contactsFormMessage = document.querySelector(".contacts__form-message");
const contactsForm = document.querySelector(".contacts__form");
contactsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(Object.fromEntries(formData));
});
*/
