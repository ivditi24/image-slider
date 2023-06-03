const dots = document.querySelectorAll(".dot");
const carousel = document.querySelector(".carousel");

dots.forEach((dot, ind) =>
  dot.addEventListener("click", () => {
    dots.forEach((dot) => dot.classList.remove("active"));
    dot.classList.toggle("active");

    const prev = ind + 1;

    const index = ind === 0 && prev > 1 ? 1 : ind;

    carousel.style.transform = `translate(calc(-100% * ${index}))`;
  })
);
