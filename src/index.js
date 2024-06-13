import "./styles/styles.js";

const dropDownMenuTitleElement = document.querySelector(
  ".drop-down-menu-title-element"
);
dropDownMenuTitleElement.addEventListener("hover", () => {
  const dropDownMenuItemsContainer = document.querySelector(
    ".drop-down-menu-items-container"
  );
  dropDownMenuItemsContainer.classList.add("visible");
});
