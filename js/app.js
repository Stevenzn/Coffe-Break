/* Open and close menu hamburguer */
const btnProduct = document.querySelector('product-buttons');
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

  

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});
 
/* Close menu hamburguer when click on link */
navWrapper.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
