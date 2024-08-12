import { createDecrementSVG, createIncrementSVG } from "./svg.js";
import { createActiveCart, handleCurrentSelection, createOrderDisplay, calculateSelection } from "../atc-section/activeCart.js";

/* Buttons For ATC Counter Container */
function createDecrementButton() {
  const button = document.createElement("button");
  const baseFill = "#fff";
  const hoverFill = "hsl(var(--red))";
  const { svg, path } = createDecrementSVG(baseFill);

  button.append(svg);
  button.classList.add("decrement");

  button.addEventListener("mouseover", () => {
    path.setAttribute("fill", hoverFill);
  });

  button.addEventListener("mouseout", () => {
    path.setAttribute("fill", baseFill);
  });

  return button;
}

function createIncrementButton() {
  const button = document.createElement("button");
  const baseFill = "#fff";
  const hoverFill = "hsl(var(--red))";
  const { svg, path } = createIncrementSVG(baseFill);

  button.append(svg);
  button.classList.add("increment");

  button.addEventListener("mouseover", () => {
    path.setAttribute("fill", hoverFill);
  });

  button.addEventListener("mouseout", () => {
    path.setAttribute("fill", baseFill);
  });

  return button;
}
/* ================================== */
function createCounterATCButton(productId, baseAtcButton) {
  /* Initializing Container/Wrapper & cart count for individual  */
  const container = document.createElement("div");
  /* Creating Element For Displaying Current Count */
  const counterDisplay = document.createElement("span");
  /* Selecting Current Product Card */
  const productCard = document.getElementById(`product-${productId}`);
  /* Grabbing Product Added So Far By The User */
  let individualProductAdded = parseInt(productCard.dataset.count);
  /* Grabbing Current Selection */
  const currSelection = document.getElementById(`selection-${productId}`);
  /* Grabbing ATC Heading For Total Items In Cart */

  /* Selecting Image Of Product Instace */
  const productPicture = document.getElementById(`img-${productId}`);
  productPicture.classList.add('selected');
  

  counterDisplay.textContent = `${individualProductAdded}`;

  /* Decrement Functionality */
  const decrementBtn = createDecrementButton();
  decrementBtn.addEventListener("click", () => {
    individualProductAdded -= 1;
    // Updating Counter Display To New Count
    counterDisplay.textContent = individualProductAdded;
    // Updating New Cart Count On Product Card Instance Itself
    productCard.dataset.count = individualProductAdded;
    // Updating Selection Count
    if (currSelection) {
      currSelection.dataset.count--;
    }
    // Updating ATC Heading Count & Text Content
    let headingCount = parseInt(document.getElementById('atc-heading').dataset.count);
      headingCount -= 1;
      document.getElementById('atc-heading').dataset.count = headingCount;
      document.getElementById('atc-heading').textContent = `Your Cart (${headingCount})`;

      /* Reset Selection */
    if (individualProductAdded <= 0) {
      decrementBtn.parentElement.remove();
      baseAtcButton.classList.remove("hidden");
      productPicture.classList.remove('selected');
      document.getElementById(`selection-${productId}`).remove();
      document.getElementById(`divider-${productId}`).remove();
    }

    /* Reset Active Cart To Empty Cart*/
    if (!headingCount) {
      document.getElementById('empty-cart').classList.remove('hidden');
      document.getElementById('active-cart').remove();
    }

    /* Decrementing Amount & Unit Price / Updating Total Of Selection */
    const selectionTotal = calculateSelection(productId, -1);

  });

  /* Increment Functionality */
  const incrementBtn = createIncrementButton();
  incrementBtn.addEventListener("click", () => {
    individualProductAdded += 1;
    // Updating Counter Display To New Count
    counterDisplay.textContent = individualProductAdded;
    // Updating New Cart Count On Product Card Instance Itself
    productCard.dataset.count = individualProductAdded;
    // Updating Selection Count
    document.getElementById(`selection-${productId}`).dataset.count++;
    // Updating ATC Heading Count & Text Content
    let headingCount = parseInt(document.getElementById('atc-heading').dataset.count);
      headingCount += 1;
      document.getElementById('atc-heading').dataset.count = headingCount;
      document.getElementById('atc-heading').textContent = `Your Cart (${headingCount})`;
    
    /* Incrementing Amount & Unit Price / Updating Total Of Selection */
    const selectionTotal = calculateSelection(productId, 1);
    
  });

  container.append(decrementBtn, counterDisplay, incrementBtn);
  container.classList.add("atc-counter-btn");

  return container;
}

/* Handling Creation Of ATC <button> Element */
function createBaseATCButton(source, text, productId) {
  const baseATCButton = document.createElement("button");
  const buttonImg = document.createElement("img");
  buttonImg.src = source;

  const buttonText = document.createTextNode(text);
  const buttonClasses = [
    "atc-btn",
    "fw-600", 
    "text-rose-900",
    "product-fs",
    'prevent-select',
    ];

  baseATCButton.append(buttonImg, buttonText);
  baseATCButton.id = `base-atc-${productId}`;
  baseATCButton.classList.add(...buttonClasses);

  /* Adding On Click Event For BASE ATC BUTTON */
  baseATCButton.addEventListener("click", () => {
      /* Selecting Current Product Card */
      const productCard = document.getElementById(`product-${productId}`);
      /* Initializing Product Card's Cart Count To 1 */
      productCard.dataset.count = "1";
      /* Initializing ATC Heading Count To 1 */
      let headingCount = parseInt(document.getElementById('atc-heading').dataset.count);
      headingCount += 1;
      document.getElementById('atc-heading').dataset.count = headingCount;
      document.getElementById('atc-heading').textContent = `Your Cart (${headingCount})`;
      // console.log(document.getElementById('atc-heading').dataset.count)
      /* Selecting Base ATC Btn & Passing Reference to Counter Btn */
    const baseAtcButton = document.getElementById(baseATCButton.id);
    /* Creating ATC Counter <button> Element */
    const atcCounterButton = createCounterATCButton(productId, baseAtcButton);


    /* Appending Counter <button> to parent reference (pictureContent) */
    const pictureContent = baseATCButton.parentElement;
    pictureContent.append(atcCounterButton);

    /* Hiding Initial ATC Button */
    baseATCButton.classList.add("hidden");

    /* ======================== */
    /* Displaying Active Cart Content / Hiding Empty Cart Content */
    const emptyCart = document.getElementById('empty-cart');
    emptyCart.classList.add('hidden');

    // const cartAmount = document.getElementById('atc-heading').dataset.inCart;

    let activeCart = document.getElementById('active-cart');

    
    /* If Active Cart Does Not Exist, Create It */
    if (!activeCart) {
      /* Create Order Display If There Isn't An Active Cart */
      const order = createOrderDisplay();
      activeCart = createActiveCart();
      activeCart.append(order);
    }
    handleCurrentSelection(productId, activeCart);
    // console.log(activeCart)

  });

  return baseATCButton;
}

export default createBaseATCButton;
