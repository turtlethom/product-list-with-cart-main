import { createRemoveIconSVG } from "../util/svg.js";
import { createConfirmButton } from "./cartBtn.js";

/* Update The TOTAL Items In Cart And Display It */
function updateCartHeading() {
    
}

function createActiveCart() {
    const cartWrapper = document.getElementById('cart-wrapper');
    const activeCart = document.createElement('div');
    activeCart.classList.add('active-cart');
    cartWrapper.append(activeCart);

    return activeCart;

}

function handleCurrentSelection(productId, activeCart) {
    /* Grabbing Element With Product Information */
    const productDetails = document.getElementById(`product-${productId}-details`);
    /* Looking For Existing Selection */
    let selection = document.getElementById(`selection-${productId}`);
    /* If Selection Does Not Exist, Create Instance */
    if (!selection) {
        console.log(!selection)
        /* Creating Selection Element & Appending It To Active Cart */
        selection = document.createElement('div');
        selection.id = `selection-${productId}`;
        selection.classList.add('cart-item');
        selection.dataset.count = 1;
        /* Parsing Strings For Calculating Totals */
        const parsedAmount = parseInt(selection.dataset.count);
        const parsedPrice = parseFloat(productDetails.children[2].textContent.slice(1)).toFixed(2);

        const unitTitle = document.createElement('h4');
        unitTitle.textContent = productDetails.children[1].textContent;
        unitTitle.classList.add(
            'unit-title',
            'text-rose-900',
        );
        /* Adding Unit (Product) Title */
        selection.append(unitTitle);

        /* Handling The Details Of The Selected Individual Product */
        const itemDetails = createItemDetails(activeCart, parsedAmount, parsedPrice);
        selection.append(itemDetails);
        
        activeCart.insertAdjacentElement('beforebegin', selection);

        /* Appending Remove Button For Selection */
        const removeButton = document.createElement('button');
        const { svg: removeIcon } = createRemoveIconSVG('#CAAFA7');
        removeButton.appendChild(removeIcon);
        removeButton.classList.add('remove-btn');
        selection.append(removeButton);

        // const cartHeading = document.getElementById('atc-heading');
        // cartHeading.dataset.inCart = 1;
        // cartHeading.textContent = `Your Cart(${cartHeading.dataset.inCart})`;
    }



}

/* Creating ItemDetails for SINGLE Cart Item */
function createItemDetails(activeCart, amount, price) {

    const cartItemDetails = document.createElement('div');
    cartItemDetails.classList.add('cart-item-details');

    /* Amount Of Selected Item In Cart */
    const unitAmount = document.createElement('span');
    unitAmount.classList.add(
        'unit-amount',
        'text-red',
        'fw-700',
    );
    unitAmount.textContent = `${amount}x`;

    /* Price For Buying The Selected Item */
    const unitPrice = document.createElement('span');
    unitPrice.classList.add(
        'unit-price', 
        'text-rose-500',
    );
    unitPrice.textContent =`$${price}`;

    /* Total Cost Of Buying Selected Item(s) */
    const unitTotal = document.createElement('span');
    console.log(unitTotal)
    unitTotal.classList.add(
        'unit-total',
        'text-rose-500',
        'fw-700',
    );
    /* Using Parsed Amount & Price To Calculate Selection Total */
    const calculatedProduct = (amount * price).toFixed(2);
    unitTotal.textContent = `$${calculatedProduct}`;

    cartItemDetails.appendChild(unitAmount);
    cartItemDetails.appendChild(unitPrice);
    cartItemDetails.appendChild(unitTotal);

    return cartItemDetails;
}

/* Calculating The Total Items In The Cart And Displaying It */
function createCartOrder() {
    const calculatedOrder = document.createElement('div');
    calculatedOrder.classList.add('order');

    const orderLabel = document.createElement('span');
    orderLabel.textContent = "Order Total";
    orderLabel.classList.add('order-label');

    const orderTotal = document.createElement('span');
    orderTotal.textContent = "$5.50";
    orderTotal.classList.add(
        'order-total',
        'sub-heading-fs',
        'fw-700'
    );

    calculatedOrder.append(orderLabel, orderTotal);
    return calculatedOrder;
}

/* Displaying Eco-Friendly Message And Confirm Button */
function createCartMessage() {
    const cnContainer = document.createElement('div');
    cnContainer.classList.add(
        'cn-message',
        'bg-rose-100',
    );

    const cnImage = document.createElement('img');
    cnImage.src = './assets/images/svg/icon-carbon-neutral.svg';
    cnImage.alt = 'carbon-neutral';

    const cnText = document.createElement('span');
    const bold = document.createElement('strong');
    bold.textContent = 'carbon-neutral';
    cnText.append('This is a ', bold, ' delivery');

    cnContainer.append(cnImage, cnText);

    console.log(cnContainer)

    return cnContainer;
}

function createOrderDisplay() {
    const order = createCartOrder();
    const cartMessage = createCartMessage();
    const confirmButton = createConfirmButton();
    order.append(cartMessage, confirmButton);
    return order;
}

export { 
    createActiveCart,
    updateCartHeading,
    handleCurrentSelection, 
    createOrderDisplay
}