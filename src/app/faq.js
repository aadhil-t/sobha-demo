// In ../app/faq.js
export function initAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      faqItems.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".toggle-icon").textContent = "+";
      });
      item.classList.add("active");
      item.querySelector(".toggle-icon").textContent = "×";
    });
  });
}
