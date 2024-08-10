function createEmptyCartContent() {
    /* Creating Empty/Default Cart */
    const content = document.createElement('div');

    const emptyCartImage = document.createElement('img');
    emptyCartImage.src = './assets/images/svg/illustration-empty-cart.svg';

    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.textContent = "Your added items will appear here";

    content.append(emptyCartImage, emptyCartMessage);
    content.classList.add('centered', 'empty-cart');

    /* Selecting ATC-SECTION & ADDING INITIAL DATA  */
    const atcSection = document.getElementById('atc-section');
    atcSection.dataset.itemsInCart = 0;
    atcSection.classList.add('centered');

    /* Selecting & Updating Heading */
    
    return content;
}

function populateATCSection() {
    const cartSection = document.getElementById('user-cart');
    const emptyCart = createEmptyCartContent();

    cartSection.append(emptyCart);

}

export default populateATCSection;