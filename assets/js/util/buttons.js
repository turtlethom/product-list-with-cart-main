import { createDecrementSVG, createIncrementSVG } from "./svg.js";

/* Buttons For ATC Counter Container */
function createDecrementButton() {
    const button = document.createElement('button');
    const baseFill = '#fff';
    const hoverFill = 'hsl(var(--red))';
    const { svg, path } = createDecrementSVG(baseFill);
    
    button.append(svg);
    button.classList.add('decrement');

    button.addEventListener('mouseover', () => {
        path.setAttribute('fill', hoverFill)
    });

    button.addEventListener('mouseout', () => {
        path.setAttribute('fill', baseFill)
    })
    
    return button;
}

function createIncrementButton() {
    const button = document.createElement('button');
    const baseFill = '#fff';
    const hoverFill = 'hsl(var(--red))';
    const { svg, path } = createIncrementSVG(baseFill);
    
    button.append(svg);
    button.classList.add('increment');

    button.addEventListener('mouseover', () => {
        path.setAttribute('fill', hoverFill)
    });

    button.addEventListener('mouseout', () => {
        path.setAttribute('fill', baseFill)
    })
    
    return button;
}
/* ================================== */
function createCounterATCButton(productId, baseAtcButton) {
    /* Initializing Container/Wrapper & cart count for individual  */
    const container = document.createElement('div');

    /* Selecting Current Product Container & Getting Current Product Amount In Cart */
    const productCard = document.getElementById(`product-${productId}`);
    let productInCart = parseInt(productCard.dataset.count);

    const counterDisplay = document.createElement('span');
    counterDisplay.textContent = `${productInCart}`;

    /* Decrement Functionality */
    const decrementBtn = createDecrementButton();
    decrementBtn.addEventListener('click', () => {
        productInCart -= 1;
        counterDisplay.textContent = productInCart;
        if (productInCart <= 0) {
            decrementBtn.parentElement.classList.add('hidden');
            baseAtcButton.classList.remove('hidden')
        }
    });

    /* Increment Functionality */
    const incrementBtn = createIncrementButton();
    incrementBtn.addEventListener('click', () => {
        productInCart += 1;
        counterDisplay.textContent = productInCart;
    });

    container.append(decrementBtn, counterDisplay, incrementBtn);
    container.classList.add('atc-counter-btn');

    return container;
}

/* Handling Creation Of ATC <button> Element */
function createATCButton(source, text, productId) {
    const button = document.createElement("button");

    const buttonImg = document.createElement("img");
    buttonImg.src = source;

    const buttonText = document.createTextNode(text);

    const buttonClasses = [
        "atc-btn",
        "fw-600",
        "text-rose-900",
        "product-fs",
    ];

    button.append(buttonImg, buttonText);
    button.id = `base-atc-${productId}`;
    button.classList.add(...buttonClasses);

    /* Selecting Base ATC Btn & Passing Reference to Counter Btn */
    const baseAtcButton = document.getElementById(button.id);
    console.log(baseAtcButton)

    button.addEventListener('click', () => {
        /* Creating ATC Counter <button> Element */
        const atcCounterButton = createCounterATCButton(productId, baseAtcButton);
        
        /* Appending Counter <button> to parent reference (pictureContent) */
        const pictureContent = button.parentElement;
        pictureContent.append(atcCounterButton);

        /* Passing `cartcount` value to counter button's `count` */
        /* Setting <span> within counter button container to the current count */
        atcCounterButton.count = cartCount += 1;
        atcCounterButton.children[1].textContent = `${cartCount}`;

        /* Hiding Initial ATC Button */
        button.classList.add('hidden');
    })

    return button;
}

export default createATCButton;
