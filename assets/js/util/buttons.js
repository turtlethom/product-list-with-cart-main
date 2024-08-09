import { createDecrementSVG, createIncrementSVG } from "./svg.js";

/* Buttons For ATC Counter Container */
function createDecrementButton(decrementSource) {
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

function createIncrementButton(incrementSource) {
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
function createCounterATCButton(decrementSrc, incrementSrc) {
    /* Initializing Container/Wrapper & cart count for individual  */
    const container = document.createElement('div');

    const counterDisplay = document.createElement('span');
    counterDisplay.textContent = container.count;

    /* Decrement Functionality */
    const decrementBtn = createDecrementButton(decrementSrc);
    decrementBtn.addEventListener('click', () => {
        counterDisplay.textContent = container.count -= 1;
        if (container.count <= 0) {
            decrementBtn.parentElement.classList.add('hidden');
            let originalATCButton = decrementBtn.parentElement.parentElement.children[1];
            originalATCButton.classList.remove('hidden')

        }
    });

    /* Increment Functionality */
    const incrementBtn = createIncrementButton(incrementSrc);
    incrementBtn.addEventListener('click', () => {
        counterDisplay.textContent = container.count += 1;
    });

    container.append(decrementBtn, counterDisplay, incrementBtn);
    container.classList.add('atc-counter-btn');

    return container;
}

/* Handling Creation Of ATC <button> Element */
function createATCButton(source, text) {
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
    button.classList.add(...buttonClasses);

    button.addEventListener('click', () => {
        /* Creating ATC Counter <button> Element */
        const decrementSVG = "./assets/images/svg/icon-decrement-quantity.svg";
        const incrementSVG = "./assets/images/svg/icon-increment-quantity.svg";
        const atcCounterButton = createCounterATCButton(decrementSVG, incrementSVG);
        
        /* Appending Counter <button> to parent reference (pictureContent) */
        const pictureContent = button.parentElement;
        let cartCount = parseInt(pictureContent.parentElement.attributes.cartcount.value);
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
