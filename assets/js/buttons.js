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

function createCounterATCButton(decrementSrc, incrementSrc) {
    const button = document.createElement('button');
    button.counter = 0;

    const decrementImg = document.createElement('img');
    const incrementImg = document.createElement('img');
    decrementImg.src = decrementSrc;
    incrementImg.src = incrementSrc;

    const buttonText = document.createTextNode(button.counter);

    const buttonClasses = [
        "atc-counter-btn",
        "fw-600",
    ]

    button.append(decrementImg, buttonText, incrementImg);

    button.classList.add(...buttonClasses)
    // button.textContent = button.counter;

    return button;
}

export { createATCButton, createCounterATCButton };
