function createEmptyCartContent(parent) {
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

    parent.append(content);
}

function resetCartSection() {
    document.getElementById('empty-cart').classList.remove('hidden');
    // document.getElementById('atc-heading').dataset.count = 0;
    document.getElementById('active-cart').remove();
}

export default createEmptyCartContent;