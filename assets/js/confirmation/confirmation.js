function createConfirmedDetails(id) {
    /* Grabbing Info For Displaying Product */
    const productInfo = document.getElementById(`product-${id}-details`).children;
    const titleText = productInfo[1].textContent;
    const priceText = productInfo[2].textContent;
    const amountText = document.getElementById(`unit-amount-${id}`).textContent;

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
    confirmedTitle.textContent = titleText;

    /* Wrapping Details For Formatting */
    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add(
        'details-wrapper',
    );
    const amount = document.createElement('span');
    amount.id = `confirmed-unit-amount-${id}`
    amount.classList.add(
        'confirmed-amount',
        'amount',
        'redhat-normal',
        'text-red',
        'fw-700',
    )
    amount.textContent = amountText;

    const price = document.createElement('span');
    price.classList.add(
        'confirmed-amount',
        'amount',
        'redhat-normal',
        'text-rose-500',
    );
    price.id = `confirmed-price-${id}`;
    price.textContent = priceText;

    detailsWrapper.append(amount, price);

    /* Appending Innner Elements To Details  */
    confirmedDetails.append(confirmedTitle, detailsWrapper);
    return confirmedDetails;
}

function createConfirmedSelection(id, thumbnailSrc) {
    const orderItem = document.createElement('div');
    orderItem.id = `ordered-${1}`;
    orderItem.classList.add(
        'order-item',
    );

    const thumbnail = document.createElement('img');
    thumbnail.src = thumbnailSrc;

    const details = createConfirmedDetails(id);
    const confirmedTotal = document.createElement('span');
    confirmedTotal.classList.add(
        'confirmed-total',
        'total',
        'redhat-normal',
        'text-rose-900',
        'fw-700',
    )

    /* Adding A Divider */
    const divider = document.createElement('hr');
    divider.classList.add('bg-rose-50');

    orderItem.append(thumbnail, details, confirmedTotal);

    return orderItem;
}

export default createConfirmedSelection;
