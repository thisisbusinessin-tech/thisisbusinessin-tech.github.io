// Smooth navbar shadow on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Fade in animation on scroll

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document
  .querySelectorAll(".feature-card, .step, .why-card")
  .forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
