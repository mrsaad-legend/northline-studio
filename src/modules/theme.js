const STORAGE_KEY = "northline-theme";

export function setupThemeToggle(button) {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

  document.documentElement.dataset.theme = initialTheme;
  updateLabel(button, initialTheme);

  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
    updateLabel(button, nextTheme);
  });
}

function updateLabel(button, theme) {
  button.textContent = theme === "dark" ? "Light theme" : "Dark theme";
  button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
}
