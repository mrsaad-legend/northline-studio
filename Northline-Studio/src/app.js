import { setupArrivalRail } from "./modules/arrivals.js";
import { setupCollection } from "./modules/collection.js";
import { setupNavigation, setupScrollProgress } from "./modules/navigation.js";
import { setupNewsletter } from "./modules/newsletter.js";
import { createProductDialog } from "./modules/productDialog.js";
import { setupRevealAnimations } from "./modules/reveal.js";
import { setupThemeToggle } from "./modules/theme.js";

const menuButton = document.querySelector("#menuButton");
const siteNav = document.querySelector("#siteNav");
const themeToggle = document.querySelector("#themeToggle");
const productDialog = createProductDialog(document.querySelector("#productDialog"));

setupNavigation({ menuButton, navigation: siteNav });
setupScrollProgress(document.querySelector("#scrollProgress"));
setupThemeToggle(themeToggle);
setupRevealAnimations();

setupCollection({
  productGrid: document.querySelector("#productGrid"),
  filterGroup: document.querySelector("#collectionFilters"),
  dialog: productDialog
});

setupArrivalRail({
  rail: document.querySelector("#arrivalRail"),
  previousButton: document.querySelector("#arrivalPrev"),
  nextButton: document.querySelector("#arrivalNext")
});

setupNewsletter(
  document.querySelector("#newsletterForm"),
  document.querySelector("#formMessage")
);
