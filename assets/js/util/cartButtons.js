import { createRemoveIconSVG } from "./svg.js";
import { createConfirmedSelection, updateConfirmedOrderTotal } from "../confirmation/confirmation.js";
import createNewOrderButton from '../util/confirmationButtons.js'

/* =========================================== */
/* Handles All Buttons Within The Cart Section */
/* =========================================== */

/**
 * 
 * Handles The Creation Of The `Confirm Order` Button For The Active Cart Section
 * @returns {HTMLButtonElement} 
 * 
 */
function createConfirmButton() {
  const confirmButton = document.createElement("button");
  confirmButton.classList.add("confirm-button");
  confirmButton.textContent = "Confirm Order";

  return confirmButton;
}

/**
 * Used For Handling The Confirm Order Functionality
 * 
 * @param {int} id - Represents The Id Of Each Product
 * An ID is required To Identify ALL Selected Items In Cart
 */
function handleConfirmButton(id) {
    const confirmedList = document.getElementById('confirmed-list');
    const cartItems = document.querySelectorAll('.cart-item');
    
    for (let i = 0; i < cartItems.length; i++) {
        // Grabbing thumbnail on hidden image in product section
        const thumbnail = document.createElement('img');
        const thumbnailSrc = document.getElementById(`thumbnail-${i + 1}`).dataset.thumbnail;
        thumbnail.classList.add('thumbnail');
        thumbnail.src = thumbnailSrc;

        const confirmedSelection = createConfirmedSelection(cartItems[i], id, thumbnail);
        confirmedList.appendChild(confirmedSelection);
    }

    updateConfirmedOrderTotal();

    // Handle Opening The Dialog Element Upon Button Click
    const dialog = document.querySelector('dialog');
    // Instatiating A New Order Button
    const newOrderButton = createNewOrderButton();
    dialog.append(newOrderButton);
    dialog.showModal();
}
/**
 * Handles The Creation Of The Remove Button For Each Individual Item
 * 
 * @returns {HTMLButtonElement}
 */
function createRemoveButton() {
  const button = document.createElement("button");
  const baseFill = "#CAAFA7";
  const hoverFill = "hsl(var(--rose-900))";
  const { svg: removeIcon, path } = createRemoveIconSVG(baseFill);

  button.appendChild(removeIcon);
  button.classList.add("remove-btn");

  button.addEventListener("mouseover", () => {
    path.setAttribute("fill", hoverFill);
    button.classList.add("remove-btn-hover");
  });

  button.addEventListener("mouseout", () => {
    path.setAttribute("fill", baseFill);
    button.classList.remove("remove-btn-hover");
  });

  return button;
}

export { createConfirmButton, handleConfirmButton, createRemoveButton };
