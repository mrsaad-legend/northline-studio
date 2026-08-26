export function setupNewsletter(form, message) {
  const emailInput = form.elements.email;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailInput.validity.valid) {
      message.textContent = "Enter a valid email address to continue.";
      emailInput.focus();
      return;
    }

    message.textContent = "Thanks. Your address has been noted for this demo session.";
    form.reset();
  });
}
