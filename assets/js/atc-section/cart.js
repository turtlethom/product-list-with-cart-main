import createEmptyCartContent from "./emptyCart.js";

function populateATCSection() {
    const cartSection = document.getElementById('user-cart');
    createEmptyCartContent(cartSection);
}

export default populateATCSection;