import { resetCartSection } from "../atc-section/emptyCart.js";
import { resetSelectedProduct } from "../products-section/productContent.js";

function resetConfirmationSection() {
    const confirmedSelections = document.querySelectorAll('.confirmed-selection');
    const confirmedOrderTotal = document.getElementById('confirmed-order-total');
    console.log(confirmedSelections)
    const newOrderButton = document.getElementById('new-order-btn');
    for (let i = 0; i < confirmedSelections.length; i++) {
        confirmedSelections[i].remove();
    }

    newOrderButton.remove();
    confirmedOrderTotal.textContent = `$00.00`;
}

// Handling functionality for creating a new order/ reset.
function handleNewOrderButton() {
    const dialog = document.querySelector('dialog');
    const allSelectedProducts = document.querySelectorAll('.selected');
    for (let i = 0; i < allSelectedProducts.length; i++) {
        const parsedId = allSelectedProducts[i].id.slice(4);
        resetSelectedProduct(parsedId);
    }
    resetCartSection();
    resetConfirmationSection();
    dialog.close();
}

function createNewOrderButton() {
    const button = document.createElement('button');
    button.id = 'new-order-btn';
    button.classList.add(
        'bg-red',
        'text-rose-50',
        'redhat-normal',
    );
    button.textContent = 'Create New Order';

    button.addEventListener('click', handleNewOrderButton);
    return button;
}

export default createNewOrderButton;