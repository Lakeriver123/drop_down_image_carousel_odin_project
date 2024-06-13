import "./styles/styles.js";

// dropdown.js

// Function to initialize dropdown behavior
function initializeDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const content = dropdown.querySelector(".dropdown-content");

    // Show/hide dropdown on click
    toggle.addEventListener("click", function () {
      content.classList.toggle("show");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        content.classList.remove("show");
      }
    });

    // Show dropdown on hover (optional)
    // Comment out if you want to activate only on click
    dropdown.addEventListener("mouseenter", function () {
      content.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", function () {
      content.classList.remove("show");
    });
  });
}

// Initialize dropdowns when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeDropdowns();
});
