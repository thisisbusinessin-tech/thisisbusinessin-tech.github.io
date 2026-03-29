const comingText = document.querySelector(".coming");

let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  comingText.textContent = "Coming Soon" + ".".repeat(dots);
}, 500);
