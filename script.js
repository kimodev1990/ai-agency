const primaryHeader = document.querySelector(".primary-header");
const scrollWatcher = document.createElement("div");
const hamburger = document.getElementById("menu-hamburger-mobile");
const menuMobile = document.getElementById("menu-content-mobile");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "70px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menuMobile.classList.toggle("hidden");
  menuMobile.setAttribute("id", "fading");
});
