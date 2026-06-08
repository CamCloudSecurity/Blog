const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

year.textContent = new Date().getFullYear();
