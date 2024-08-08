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

    return button;
}

function createDecrementButton(decrementSource) {
    const button = document.createElement('button');
    const image = document.createElement('img');
    image.src = decrementSource;
    
    button.append(image);
    return button;
}

function createIncrementButton(incrementSource) {
    const button = document.createElement('button');
    const image = document.createElement('img');
    image.src = incrementSource;

    button.append(image);
    return button;
}

function createCounterATCButton(decrementSrc, incrementSrc) {
    const counterContainer = document.createElement('div');
    const decrementBtn = createDecrementButton(decrementSrc);
    const incrementBtn = createIncrementButton(incrementSrc);
    
    const counterDisplay = document.createElement('span');
    const text = document.createTextNode('0');
    counterDisplay.append(text);

    counterContainer.append(decrementBtn, counterDisplay, incrementBtn);
    counterContainer.classList.add('atc-counter-btn');

    return counterContainer;
}

export { createATCButton, createCounterATCButton };
