import { collectionPieces } from "./catalog.js";

export function setupCollection({ productGrid, filterGroup, dialog }) {
  const renderProducts = (filter) => {
    const visiblePieces = filter === "all"
      ? collectionPieces
      : collectionPieces.filter((piece) => piece.category === filter);

    productGrid.innerHTML = visiblePieces.map(productCardMarkup).join("");

    productGrid.querySelectorAll("[data-product-code]").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedPiece = collectionPieces.find((piece) => piece.code === button.dataset.productCode);
        if (selectedPiece) dialog.open(selectedPiece);
      });
    });
  };

  filterGroup.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter]");
    if (!filterButton) return;

    filterGroup.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("is-active", button === filterButton);
    });

    renderProducts(filterButton.dataset.filter);
  });

  renderProducts("all");
}

function productCardMarkup(piece) {
  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${piece.image}" alt="${piece.alt}" loading="lazy" />
        <button type="button" data-product-code="${piece.code}">View details</button>
      </div>
      <div class="product-info">
        <div>
          <h3>${piece.name}</h3>
          <p>${piece.label}</p>
        </div>
        <span>${piece.code}</span>
      </div>
    </article>
  `;
}
