import { createRemoveIconSVG } from "../util/svg.js";
import { createConfirmButton } from "./cartBtn.js";

function createActiveCart() {
    const cartWrapper = document.getElementById('cart-wrapper');
    const activeCart = document.createElement('div');
    activeCart.id = 'active-cart'
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
        /* Creating Selection Element & Appending It To Active Cart */
        selection = document.createElement('div');
        selection.id = `selection-${productId}`;
        selection.classList.add('cart-item');
        selection.dataset.count = 1;
        /* Parsing Strings For Calculating Totals */
        const initialAmount = parseInt(selection.dataset.count);
        const initialPrice = parseFloat(productDetails.children[2].textContent.slice(1)).toFixed(2);

        const unitTitle = document.createElement('h4');
        unitTitle.textContent = productDetails.children[1].textContent;
        unitTitle.classList.add(
            'unit-title',
            'text-rose-900',
            'redhat-normal'
        );
        /* Adding Unit (Product) Title */
        selection.append(unitTitle);
        /* Handling The Details Of The Selected Individual Product */
        const itemDetails = createItemDetails(initialAmount, initialPrice, productId);
        selection.append(itemDetails);
        /* Ensuring Selection Is ALWAYS Inserted AFTER The BEGINNING Of Active Cart */
        activeCart.insertAdjacentElement('afterbegin', selection);
        /* Creating <hr> Element For Visual Separator Of Items */
        const hr = document.createElement('hr');
        hr.id = `divider-${productId}`;
        selection.insertAdjacentElement('afterend', hr);
        /* Appending Remove Button For Selection */
        const removeButton = document.createElement('button');
        const { svg: removeIcon } = createRemoveIconSVG('#CAAFA7');
        removeButton.appendChild(removeIcon);
        removeButton.classList.add('remove-btn');
        selection.append(removeButton);

    }
}

/* Creating ItemDetails for SINGLE Cart Item */
function createItemDetails(amount, price, id) {

    const cartItemDetails = document.createElement('div');
    cartItemDetails.classList.add('cart-item-details');

    /* Amount Of Selected Item In Cart */
    const unitAmount = document.createElement('span');
    unitAmount.id = `unit-amount-${id}`;
    unitAmount.classList.add(
        'amount',
        'redhat-normal',
        'text-red',
        'fw-700',
    );
    unitAmount.textContent = `x${amount}`;

    /* Price For Buying The Selected Item */
    const unitPrice = document.createElement('span');
    unitPrice.id = `unit-price-${id}`
    unitPrice.classList.add(
        'price',
        'redhat-normal',
        'text-rose-500',
    );
    unitPrice.textContent =`$${price}`;

    /* Total Cost Of Buying Selected Item(s) */
    const unitTotal = document.createElement('span');
    unitTotal.id = `unit-total-${id}`,
    unitTotal.classList.add(
        'total',
        'redhat-normal',
        'text-rose-500',
        'fw-700',
    );
    /* Using Parsed Amount & Price To Calculate Selection Total */
    unitTotal.textContent = `$${price}`

    cartItemDetails.appendChild(unitAmount);
    cartItemDetails.appendChild(unitPrice);
    cartItemDetails.appendChild(unitTotal);

    return cartItemDetails;
}

/* Calculating Total For Individual Selection */
function calculateSelection(id, num) {
    if (document.getElementById(`unit-amount-${id}`)) {
        let amount = parseInt(document.getElementById(`unit-amount-${id}`).textContent.slice(1));
        amount += num;
        document.getElementById(`unit-amount-${id}`).textContent = `x${amount}`;
    
        let price = parseFloat(document.getElementById(`unit-price-${id}`).textContent.slice(1));
        const total = (amount * price).toFixed(2);
    
        document.getElementById(`unit-total-${id}`).textContent = `$${total}`;
    
        return total;
    }
}

/* Calculating Total For All Items In Active Cart */
function calculateCartPrice(id, action) {
    if (document.getElementById(`order-total`)) {
        let cartTotal = parseFloat(document.getElementById('order-total').textContent.slice(1));
        let unitPrice = parseFloat(document.getElementById(`unit-price-${id}`).textContent.slice(1));
        switch (action) {
            case "add":
                cartTotal += parseFloat(unitPrice);
                break;
            case "subtract":
                cartTotal -= parseFloat(unitPrice);
                break;
            default:
                return;
        }
        document.getElementById('order-total').textContent = `$${cartTotal.toFixed(2)}`;

    }
}

/* Displaying Total Items In Cart & Cost */
function createCartOrder() {
    const calculatedOrder = document.createElement('div');
    calculatedOrder.classList.add('order');

    const orderLabel = document.createElement('span');
    orderLabel.id = 'order-label';
    orderLabel.textContent = "Order Total";
    orderLabel.classList.add(
        'redhat-normal',
    );

    const orderTotal = document.createElement('span');
    orderTotal.id = 'order-total';
    orderTotal.textContent = "$0.00";
    orderTotal.classList.add(
        'sub-heading-fs',
        'fw-700',
    );

    calculatedOrder.append(orderLabel, orderTotal);
    return calculatedOrder;
}

/* Displaying Eco-Friendly Message And Confirm Button */
function createCartMessage() {
    const cnContainer = document.createElement('div');
    cnContainer.classList.add(
        'cn-message',
        'redhat-normal',
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

    // console.log(cnContainer)

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
    handleCurrentSelection, 
    createOrderDisplay,
    calculateSelection,
    calculateCartPrice,
}