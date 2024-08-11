import { createRemoveIconSVG } from "../util/svg.js";

/* Update The TOTAL Items In Cart And Display It */
function updateCartHeading(count) {
    const cartHeading = document.getElementById('atc-heading');
    let inCart = parseInt(cartHeading.dataset.inCart) + count;
    cartHeading.dataset.inCart = inCart;
    cartHeading.textContent = `Your Cart (${inCart})`;
}

function createActiveCart(productId) {
    let activeCart = document.getElementById('active-cart');
    /* If Active Cart Does Not Exist, Create It */
    if (activeCart === null) {
        activeCart = document.createElement('div');
        content.classList.add('active-cart');
    }
    
    handleCurrentSelection(activeCart, productId);

    /* Appending Remove Button For Selection */
    const removeButton = document.createElement('button');
    const { removeIcon, path } = createRemoveIconSVG('#CAAFA7');
    removeButton.append(removeIcon);
    removeButton.classList.add('remove-btn');
}

function handleCurrentSelection(activeCart, productId) {
    /* Grabbing Element With Product Information */
    const productDetails = document.getElementById(`product-${productId}-details`);
    /* Parsing Strings For Calculating Totals */
    const parsedAmount = parseInt(selection.dataset.count);
    const parsedPrice = parseInt(productDetails.children[2].slice(1));
    /* If Selection Does Not Exist, Create Instance */
    let selection = document.getElementById(`selection-${productId}`);
    if (selection === null) {
        /* Creating Selection Element & Appending It To Active Cart */
        selection = document.createElement('div');
        selection.id = `selection-${productId}`;
        selection.classList.add('cart-item');
        selection.dataset.count = 1;

        const unitTitle = document.createElement('h4');
        unitTitle.textContent = productDetails.children[1].textContent;
        unitTitle.classList.add(
            'unit-title',
            'text-rose-500',
        );
        /* Adding Unit (Product) Title */
        selection.append(unitTitle);
        activeCart.append(selection);
        /* Handling The Details Of The Selected Individual Product */
        createItemDetails(parsedAmount, parsedPrice);

        displayOrderTotal();

        /* Displaying Message And Confirm Button */
        displayCartFooter();
    }



}

/* Creating ItemDetails for SINGLE Cart Item */
function createItemDetails(amount, price) {

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
    unitPrice.textContent(`@&nbsp;$${price.toFixed(2)}`);

    /* Total Cost Of Buying Selected Item(s) */
    const selectionTotal = document.createElement('span');
    selectionTotal.classList.add(
        'unit-total',
        'text-rose-500',
        'fw-700',
    );
    /* Using Parsed Amount & Price To Calculate Selection Total */
    const calculatedProduct = (amount * price).toFixed();
    selectionTotal.textContent(`${selectionTotal}`);

    cartItemDetails.add(amount, price, calculatedProduct);
}

/* Calculating The Total Items In The Cart And Displaying It */
function displayOrderTotal() {
    const calculatedOrder = document.createElement('div');
    calculatedOrder.classList.add('order');

    const orderLabel = document.createElement('span');
    orderLabel.textContent = "Order Total";
    orderLabel.classList.add('order-label');

    const orderTotal = document.createElement('span');
    orderTotal.textContent = "$5.50";
    orderTotal.classList.add('order-total');

    calculatedOrder.append(orderLabel, orderTotal);
    return calculatedOrder;
}

/* Displaying Eco-Friendly Message And Confirm Button */
function displayCartFooter() {
    const cnContainer = document.createElement('div');
    cnContainer.classList.add('cn-message');

    const cnImage = document.createElement('img');
    cnImage.src = './assets/images/svg/icon-carbon-neutral.svg';
    cnImage.alt = 'carbon-neutral';

    const cnText = document.createElement('span');
    cnText.append('This is a <strong>carbon-neutral</strong> delivery');

    cnContainer.append(cnImage, cnText);

    const cfButton = document.createElement('button');
    cfButton.classList.add('confirm-button');
    cfButton.textContent = "Confirm Order";
}

export { updateCartHeading }