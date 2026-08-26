export function setupArrivalRail({ rail, previousButton, nextButton }) {
  const moveRail = (direction) => {
    const firstCard = rail.querySelector(".arrival-card");
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : rail.clientWidth * 0.8;

    rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  previousButton.addEventListener("click", () => moveRail(-1));
  nextButton.addEventListener("click", () => moveRail(1));
}
