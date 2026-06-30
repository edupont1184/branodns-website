const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const quoteForm = document.querySelector(".quote-form");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open menu");
  });
});

// Replace this handler with your CRM, email, or form service integration later.
quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const submitButton = quoteForm.querySelector(".form-submit");
  if (!submitButton) return;

  const originalText = submitButton.textContent;
  submitButton.textContent = "Request Ready to Send";
  submitButton.disabled = true;

  window.setTimeout(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
    quoteForm.reset();
  }, 2200);
});
