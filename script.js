document.addEventListener("DOMContentLoaded", () => {
    const totalAmount = document.querySelector(".total-amount");
  
    const radioButtons = document.querySelectorAll(".radio-button");
  
    radioButtons.forEach(button => {
      button.addEventListener("change", () => {

        const selectedOffer = document.querySelector(".radio-button:checked");
  
        const price = selectedOffer ? selectedOffer.dataset.price : 0;
  
        totalAmount.textContent = `$${price}.00 USD`;
      });
    });
  });
  