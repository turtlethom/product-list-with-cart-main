function createActiveCartContent() {
    const content = document.createElement('div');
    content.classList.add('active-cart');
    
    const unitTitle = document.createElement('h4');
    unitTitle.classList.add(
        'unit-title',
        'text-rose-500',
    );

    const cartItemDetails = createCartItemDetails();

    const removeButton = document.createElement('button');
    const removeIcon = createRemoveIconSVG('#CAAFA7');
}

function createCartItemDetails() {
    const container = document.createElement('div');
    container.classList.add('cart-item-details');

    const amount = document.createElement('span');
    amount.classList.add(
        'amount',
        'text-red',
        'fw-700',
    );

    const unitPrice = document.createElement('span');
    unitPrice.classList.add(
        'unit-price', 
        'text-rose-500',
    );
    unitPrice.textContent('@&nbsp;$5.50');

    const total = document.createElement('span');
    total.classList.add(
        'total',
        'text-rose-500',
        'fw-700',
    );
    total.textContent('$5.50');

    container.add(amount, unitPrice, total);

    return container;
}