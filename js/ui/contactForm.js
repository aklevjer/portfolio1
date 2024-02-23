import * as utils from "../utils/index.js";

export function toggleInputError(inputElement, shouldHide) {
  const inputContainer = inputElement.parentElement;
  const errorMessage = inputContainer.querySelector(".error-msg");

  inputElement.classList.toggle("error-border", !shouldHide);
  errorMessage.classList.toggle("flex", !shouldHide);
  errorMessage.classList.toggle("hidden", shouldHide);
}

function initInputListeners(inputElements) {
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("change", () => {
      toggleInputError(inputElement, utils.validateInput(inputElement));
    });
  });
}

function handleContactSubmit(event, inputElements) {
  event.preventDefault();

  if (utils.isFormValid(inputElements)) {
    const contactForm = event.target;
    const successMsg = document.querySelector(".success-msg");

    contactForm.reset();
    successMsg.textContent = "Your message was sent!";
  }
}

export function initContactForm() {
  const contactForm = document.forms.contact;
  const inputElements = [contactForm.name, contactForm.email, contactForm.subject, contactForm.message];

  initInputListeners(inputElements);
  contactForm.addEventListener("submit", (event) => handleContactSubmit(event, inputElements));
}
