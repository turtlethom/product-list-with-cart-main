function createConfirmButton() {
    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirm-button');
    confirmButton.textContent = "Confirm Order";

    return confirmButton;
}

function createRemoveButton() {
    
}

export { createConfirmButton, createRemoveButton };