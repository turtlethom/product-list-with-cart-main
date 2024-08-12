import createEmptyCartContent from "./emptyCart.js";

function populateATCSection() {
    const cartSection = document.getElementById('cart-wrapper');
    createEmptyCartContent(cartSection);
}

export default populateATCSection;