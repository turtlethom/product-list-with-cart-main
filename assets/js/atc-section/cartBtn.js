import { createRemoveIconSVG } from "../util/svg.js";

function createConfirmButton() {
    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirm-button');
    confirmButton.textContent = "Confirm Order";

    return confirmButton;
}

function createRemoveButton() {
    const button = document.createElement('button');
    const baseFill = '#CAAFA7';
    const hoverFill = 'hsl(var(--rose-900))';
    const { svg: removeIcon, path } = createRemoveIconSVG(baseFill);

    button.appendChild(removeIcon);
    button.classList.add('remove-btn');

    button.addEventListener('mouseover', () => {
        path.setAttribute('fill', hoverFill);
        button.classList.add('remove-btn-hover')
    });
    
    button.addEventListener('mouseout', () => {
        path.setAttribute('fill', baseFill);
        button.classList.remove('remove-btn-hover')
    });

    return button;
}

export { createConfirmButton, createRemoveButton };