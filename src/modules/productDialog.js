export function createProductDialog(dialogElement) {
  const dialogImage = dialogElement.querySelector("#dialogImage");
  const dialogCategory = dialogElement.querySelector("#dialogCategory");
  const dialogTitle = dialogElement.querySelector("#dialogTitle");
  const dialogDescription = dialogElement.querySelector("#dialogDescription");
  const dialogCode = dialogElement.querySelector("#dialogCode");
  const closeButton = dialogElement.querySelector("#dialogClose");
  const shortlistButton = dialogElement.querySelector("#dialogAction");

  const close = () => {
    if (dialogElement.open) dialogElement.close();
  };

  const open = (piece) => {
    dialogImage.src = piece.image;
    dialogImage.alt = piece.alt;
    dialogCategory.textContent = piece.label;
    dialogTitle.textContent = piece.name;
    dialogDescription.textContent = piece.description;
    dialogCode.textContent = piece.code;
    shortlistButton.classList.remove("is-saved");
    shortlistButton.textContent = "Save to shortlist";
    document.body.classList.add("dialog-open");
    dialogElement.showModal();
  };

  closeButton.addEventListener("click", close);

  dialogElement.addEventListener("click", (event) => {
    if (event.target === dialogElement) close();
  });

  dialogElement.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });

  dialogElement.addEventListener("cancel", () => {
    document.body.classList.remove("dialog-open");
  });

  shortlistButton.addEventListener("click", () => {
    shortlistButton.classList.toggle("is-saved");
    shortlistButton.textContent = shortlistButton.classList.contains("is-saved")
      ? "Saved to shortlist"
      : "Save to shortlist";
  });

  return { open, close };
}
