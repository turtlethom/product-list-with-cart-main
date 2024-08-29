import { createEmptyCartContent } from "./emptyCart.js";

function populateATCSection() {
    const cartSection = document.getElementById('cart-wrapper');
    const emptyCartContent = createEmptyCartContent(cartSection);
    cartSection.append(emptyCartContent);
}

export default populateATCSection;