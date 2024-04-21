const Header = document.querySelector(".headerabout");
const Watcher = document.createElement("div");
const ceoBio = document.getElementById("ceo-bio");
const ceoClose = document.getElementById("ceo-close");
const ceoPopUp = document.getElementById("ceo-popup");
const ctoBio = document.getElementById("cto-bio");
const ctoClose = document.getElementById("cto-close");
const ctoPopUp = document.getElementById("cto-popup");
const firstEngineerBio = document.getElementById("first-engineer-bio");
const firstEngineerClose = document.getElementById("engineer1-close");
const firstEngineerPopUp = document.getElementById("engineer1-popup");
const secondEngineerBio = document.getElementById("second-engineer-bio");
const secondEngineerClose = document.getElementById("engineer2-close");
const secondEngineerPopUp = document.getElementById("engineer2-popup");
const advisorBio = document.getElementById("advisor-bio");
const advisorClose = document.getElementById("advisor-close");
const advisorPopUp = document.getElementById("advisor-popup");
const hamburgerAbout = document.getElementById("menu-hamburger-mobile-about");
const menuMobileAbout = document.getElementById("menu-content-mobile-about");

Watcher.setAttribute("data-scroll-watcher", "");
Header.before(Watcher);

const Observer = new IntersectionObserver(
  (entries) => {
    Header.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "10px 0px 0px 0px" }
);

Observer.observe(Watcher);

ceoBio.addEventListener("click", () => {
  ceoPopUp.classList.remove("hidden");
});
ceoClose.addEventListener("click", () => {
  ceoPopUp.classList.add("hidden");
});

ctoBio.addEventListener("click", () => {
  ctoPopUp.classList.remove("hidden");
});
ctoClose.addEventListener("click", () => {
  ctoPopUp.classList.add("hidden");
});

firstEngineerBio.addEventListener("click", () => {
  firstEngineerPopUp.classList.remove("hidden");
});
firstEngineerClose.addEventListener("click", () => {
  firstEngineerPopUp.classList.add("hidden");
});

secondEngineerBio.addEventListener("click", () => {
  secondEngineerPopUp.classList.remove("hidden");
});
secondEngineerClose.addEventListener("click", () => {
  secondEngineerPopUp.classList.add("hidden");
});

advisorBio.addEventListener("click", () => {
  advisorPopUp.classList.remove("hidden");
});
advisorClose.addEventListener("click", () => {
  advisorPopUp.classList.add("hidden");
});

hamburgerAbout.addEventListener("click", () => {
  hamburgerAbout.classList.toggle("open-about");
  menuMobileAbout.classList.toggle("hidden");
  menuMobileAbout.setAttribute("id", "fading-about");
});
