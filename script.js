const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("#site-nav a[data-page]").forEach((link) => {
  if (link.getAttribute("data-page") === currentPage) {
    link.classList.add("active");
  }
});
