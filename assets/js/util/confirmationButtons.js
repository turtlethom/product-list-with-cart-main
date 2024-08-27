import { resetCartSection } from "../atc-section/emptyCart.js";
import { createConfirmedSelection, updateConfirmedOrderTotal } from "../confirmation/confirmation.js";
import { resetProductSection } from "../products-section/productContent.js";

function handleConfirmButton(id) {
    const confirmedList = document.getElementById('confirmed-list');
    const cartItems = document.querySelectorAll('.cart-item');
    
    for (let i = 0; i < cartItems.length; i++) {
        // Grabbing thumbnail on hidden image in product section
        const thumbnail = document.createElement('img');
        const thumbnailSrc = document.getElementById(`thumbnail-${i + 1}`).dataset.thumbnail;
        console.log(thumbnailSrc)
        thumbnail.src = thumbnailSrc;

        const confirmedSelection = createConfirmedSelection(cartItems[i], id, thumbnail);
        confirmedList.appendChild(confirmedSelection);
    }

    updateConfirmedOrderTotal();

    // Handle Opening The Dialog Element Upon Button Click
    const dialog = document.querySelector('dialog');
    dialog.showModal();
}

function handleNewOrderButton() {
    resetCartSection();
    resetProductSection();
}

export default handleConfirmButton;