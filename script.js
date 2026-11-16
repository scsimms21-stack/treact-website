// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  // Close the mobile menu after selecting a navigation link.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });

  // Restore the desktop navigation state when the viewport gets wider.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 650) {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    }
  });
}

// Demo email signup interaction.
// Connect this form to an email marketing service or backend to collect addresses.
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

if (emailForm && emailInput && formMessage) {
  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    formMessage.textContent = "Thanks! Your email was entered successfully.";
    emailForm.reset();
  });
}

// Keep the copyright year current.
const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
