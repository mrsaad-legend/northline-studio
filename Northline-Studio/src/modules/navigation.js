export function setupNavigation({ menuButton, navigation }) {
  const setMenuOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    setMenuOpen(open);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

export function setupScrollProgress(progressBar) {
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.width = `${Math.min(progress, 1) * 100}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}
