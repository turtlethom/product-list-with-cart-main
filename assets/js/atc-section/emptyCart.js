/**
 * 
 */
function createEmptyCartContent() {
    /* Creating Empty/Default Cart */
    const content = document.createElement('div');
    content.id = 'empty-cart';
    content.classList.add(
        'centered',
        'redhat-normal', 
        'fw-600',
        'text-rose-500'
    );

    const emptyCartImage = document.createElement('img');
    emptyCartImage.src = './assets/images/svg/illustration-empty-cart.svg';
    
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = "Your added items will appear here";

    content.append(emptyCartImage, emptyCartMessage);

    return content;
}

/**
 * 
 * Resets All Styling And HTML For The Cart Setting.
 * Includes Default Text Content For Elements.
 * 
 */
function resetCartSection() {
    document.getElementById('empty-cart').classList.remove('hidden');

    // Reset Heading Count
    document.getElementById('atc-heading').dataset.count = 0;
    document.getElementById('atc-heading').textContent = "Your Cart (0)";

    // Remove Active Cart
    document.getElementById('active-cart').remove();
}

export { createEmptyCartContent, resetCartSection };