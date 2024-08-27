import { createEmptyCartContent } from "./emptyCart.js";

function populateATCSection(data) {
    const cartSection = document.getElementById('cart-wrapper');
    createEmptyCartContent(cartSection);
}

export default populateATCSection;