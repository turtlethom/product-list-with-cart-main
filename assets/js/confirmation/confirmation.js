function createConfirmedDetails(unitTitle, unitAmount, unitPrice, id) {
    /* Creating Confirmed Details Element */
    const confirmedDetails = document.createElement('div');
    confirmedDetails.classList.add(
        'confirmed-details',
        'cart-item-details',
    );

    const confirmedTitle = document.createElement('h4');
    confirmedTitle.classList.add(
        'confirmed-title',
        'product-fs',
        'text-rose-900',
        'fw-600',
        'redhat-normal',
    );
    confirmedTitle.textContent = unitTitle.textContent;

    /* Wrapping Details For Formatting */
    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add(
        'details-wrapper',
    );
    const confirmedAmount = document.createElement('span');
    confirmedAmount.id = `confirmed-unit-amount-${id}`
    confirmedAmount.classList.add(
        'confirmed-amount',
        'amount',
        'redhat-normal',
        'text-red',
        'fw-700',
    )
    confirmedAmount.textContent = unitAmount.textContent;

    const confirmedPrice = document.createElement('span');
    confirmedPrice.classList.add(
        'confirmed-amount',
        'amount',
        'redhat-normal',
        'text-rose-500',
    );
    confirmedPrice.id = `confirmed-price-${id}`;
    confirmedPrice.textContent = unitPrice.textContent;

    detailsWrapper.append(confirmedAmount, confirmedPrice);

    /* Appending Innner Elements To Details  */
    confirmedDetails.append(confirmedTitle, detailsWrapper);
    return confirmedDetails;
}

function updateConfirmedOrderTotal() {
    const orderTotal = document.getElementById('order-total');
    const confirmedOrderTotal = document.getElementById('confirmed-order-total');

    confirmedOrderTotal.textContent = orderTotal.textContent;
}

function createConfirmedSelection(cartSelection, id, thumbnail) {
    /* Cart Item Information */
    const unitTitle = cartSelection.children[0];
    const unitAmount = cartSelection.children[1].children[0];
    const unitPrice = cartSelection.children[1].children[1];
    const unitTotal = cartSelection.children[1].children[2];

    // console.log(unitTitle)
    // console.log(unitAmount)
    // console.log(unitPrice)
    // console.log(unitTotal)

    // const totalText = document.getElementById(`unit-total-${id}`).textContent;

    const orderItem = document.createElement('div');
    orderItem.id = `ordered-${id}`;
    orderItem.classList.add(
        'confirmed-selection',
    );

    const details = createConfirmedDetails(unitTitle, unitAmount, unitPrice, id);
    const confirmedTotal = document.createElement('span');
    confirmedTotal.classList.add(
        'confirmed-total',
        'total',
        'redhat-normal',
        'text-rose-900',
        'fw-700',
    )
    confirmedTotal.textContent = unitTotal.textContent;

    /* Adding A Divider */
    const divider = document.createElement('hr');
    divider.classList.add(
        'bg-rose-50'
    );

    orderItem.append(thumbnail, details, confirmedTotal);

    return orderItem;
}

export { createConfirmedSelection, updateConfirmedOrderTotal };
