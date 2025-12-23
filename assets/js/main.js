// ================= Simple JS Enhancements =================

// Smooth scroll for internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add shadow to header on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }
});
