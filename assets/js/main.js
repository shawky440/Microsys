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
//Slider in Portfolio
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".clients-slider").forEach(slider => {

    const track = slider.querySelector(".slider-track");
    const cards = slider.querySelectorAll(".client-card");
    const nextBtn = slider.querySelector(".slider-btn.next");
    const prevBtn = slider.querySelector(".slider-btn.prev");

    let index = 0;

    const intervalTime = parseInt(slider.dataset.interval) || 3500;

    function cardWidth() {
      return cards[0].offsetWidth + 20;
    }

    function visibleCards() {
      return Math.floor(slider.offsetWidth / cardWidth());
    }

    function maxIndex() {
      return cards.length - visibleCards();
    }

    function move() {
      track.style.transform = `translateX(${index * cardWidth()}px)`;
    }

    nextBtn?.addEventListener("click", () => {
      if (Math.abs(index) < maxIndex()) {
        index--;
        move();
      }
    });

    prevBtn?.addEventListener("click", () => {
      if (index < 0) {
        index++;
        move();
      }
    });

    /* Auto Slide with custom timing */
    setInterval(() => {
      if (Math.abs(index) >= maxIndex()) {
        index = 0;
      } else {
        index--;
      }
      move();
    }, intervalTime);

    window.addEventListener("resize", move);
  });

});