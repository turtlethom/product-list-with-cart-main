import { resetSelectedProduct } from "../products-section/productContent.js";
import { createConfirmButton, createRemoveButton, handleConfirmButton } from "../util/cartButtons.js";
import { resetCartSection } from "./emptyCart.js";

function createActiveCart() {
  const cartWrapper = document.getElementById("cart-wrapper");
  const activeCart = document.createElement("div");
  activeCart.id = "active-cart";
  cartWrapper.append(activeCart);

  return activeCart;
}

/* Updating The Cart Heading (Count Attribute) & Text Content */
function updateCartHeading(num) {
  let headingCount = parseInt(
    document.getElementById("atc-heading").dataset.count
  );
  headingCount += num;
  document.getElementById("atc-heading").dataset.count = headingCount;
  document.getElementById("atc-heading").textContent = `Your Cart (${headingCount})`;
}

function handleCurrentSelection(id, activeCart) {
  /* Grabbing Element With Product Information */
  const productDetails = document.getElementById(`product-${id}-details`);
  /* Looking For Existing Cart Selection */
  let cartSelection = document.getElementById(`selection-${id}`);
  /* If Selection Does Not Exist, Create Instance */
  if (!cartSelection) {
    /* Creating Selection Element & Appending It To Active Cart */
    cartSelection = document.createElement("div");
    cartSelection.id = `selection-${id}`;
    cartSelection.classList.add(
      "cart-item"
    );
    cartSelection.dataset.count = 1;

    // let confirmedSelection = createConfirmedSelection();
    /* Parsing Strings For Calculating Totals */
    const initialAmount = parseInt(cartSelection.dataset.count);
    const initialPrice = parseFloat(productDetails.children[2].textContent.slice(1)).toFixed(2);

    const unitTitle = document.createElement("h4");
    unitTitle.textContent = productDetails.children[1].textContent;
    unitTitle.classList.add(
      "unit-title",
      "text-rose-900",
      "redhat-normal"
    );
    /* Adding Unit (Product) Title */
    cartSelection.append(unitTitle);

    /* Handling The Details Of The Selected Individual Product */
    const itemDetails = createItemDetails(initialAmount, initialPrice, id);
    cartSelection.append(itemDetails);

    /* Ensuring Selection Is ALWAYS Inserted AFTER The BEGINNING Of Active Cart */
    activeCart.insertAdjacentElement("afterbegin", cartSelection);
    /* Creating <hr> Element For Visual Separator Of Items */
    const hr = document.createElement("hr");
    hr.id = `divider-${id}`;
    cartSelection.insertAdjacentElement("afterend", hr);

    /* Appending Remove Button For Selection */
    const removeButton = createRemoveButton();

    // Adding Remove Button Functionality For Each Item
    removeButton.addEventListener("click", () => {
      // Reduce Total Shown In Cart
      const itemAmount = parseInt(
        document.getElementById(`unit-amount-${id}`).textContent.slice(1)
      );
      const itemPrice = parseFloat(
        document.getElementById(`unit-total-${id}`).textContent.slice(1)
      );

      let cartCount = parseInt(
        document.getElementById(`atc-heading`).dataset.count
      );
      let orderTotal = parseFloat(
        document.getElementById("order-total").textContent.slice(1)
      );
      // Resetting Button States In Individual Product
      resetSelectedProduct(id);

      cartCount -= itemAmount;
      orderTotal -= itemPrice;
      document.getElementById("order-total").textContent = `$${orderTotal.toFixed(2)}`;

      document.getElementById(`atc-heading`).dataset.count = cartCount;
      document.getElementById(`atc-heading`).textContent = `Your Cart(${cartCount})`;
      document.getElementById(`divider-${id}`).remove();

      // Handling Removal Of Displayed Item Elements
      const cartChildren = document.querySelectorAll(".cart-item");
      cartSelection.remove();
      if (!cartChildren) {
        document.getElementById("active-cart").remove();
      }
      // If Order Total Is $0.00
      if (!orderTotal) {
        resetCartSection();
        return;
      }
    });
    cartSelection.append(removeButton);
  }
}

/* Creating ItemDetails for SINGLE Cart Item */
function createItemDetails(amount, price, id) {
  const cartItemDetails = document.createElement("div");
  cartItemDetails.classList.add("cart-item-details");

  /* Amount Of Selected Item In Cart */
  const unitAmount = document.createElement("span");
  unitAmount.id = `unit-amount-${id}`;
  unitAmount.classList.add(
    "amount",
    "redhat-normal",
    "text-red",
    "fw-700"
  );
  unitAmount.textContent = `x${amount}`;

  /* Price For Buying The Selected Item */
  const unitPrice = document.createElement("span");
  unitPrice.id = `unit-price-${id}`;
  unitPrice.classList.add("price",
    "redhat-normal",
    "text-rose-500"
  );
  unitPrice.textContent = `$${price}`;

  /* Total Cost Of Buying Selected Item(s) */
  const unitTotal = document.createElement("span");
  unitTotal.id = `unit-total-${id}`,
    unitTotal.classList.add(
      "total",
      "redhat-normal",
      "text-rose-500",
      "fw-700"
    );
  /* Using Parsed Amount & Price To Calculate Selection Total */
  unitTotal.textContent = `$${price}`;

  cartItemDetails.appendChild(unitAmount);
  cartItemDetails.appendChild(unitPrice);
  cartItemDetails.appendChild(unitTotal);

  return cartItemDetails;
}

/* Calculating Total For Individual Selection */
function calculateSelection(id, num) {
  if (document.getElementById(`unit-amount-${id}`)) {
    let amount = parseInt(
      document.getElementById(`unit-amount-${id}`).textContent.slice(1)
    );
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
    let cartTotal = parseFloat(document.getElementById("order-total").textContent.slice(1));
    let priceListed = parseFloat(document.getElementById(`product-${id}-details`).children[2].textContent.slice(1));
    switch (action) {
      case "add":
        cartTotal += parseFloat(priceListed);
        break;
      case "subtract":
        cartTotal -= parseFloat(priceListed);
        break;
      default:
        return;
    }
    document.getElementById("order-total").textContent = `$${cartTotal.toFixed(2)}`;
  }
}

/* Displaying Total Items In Cart & Cost */
function createCartOrder() {
  const calculatedOrder = document.createElement("div");
  calculatedOrder.classList.add("order");

  const orderLabel = document.createElement("span");
  orderLabel.id = "order-label";
  orderLabel.textContent = "Order Total";
  orderLabel.classList.add(
    "redhat-normal",
    "text-left"
  );

  const orderTotal = document.createElement("span");
  orderTotal.id = "order-total";
  orderTotal.textContent = "$0.00";
  orderTotal.classList.add(
    "sub-heading-fs",
    "fw-700",
    "text-right"
  );

  calculatedOrder.append(orderLabel, orderTotal);
  return calculatedOrder;
}

/* Displaying Eco-Friendly Message And Confirm Button */
function createCartMessage() {
  const cnContainer = document.createElement("div");
  cnContainer.classList.add(
    "cn-message",
    "redhat-normal",
    "bg-rose-100"
  );

  const cnImage = document.createElement("img");
  cnImage.src = "./assets/images/svg/icon-carbon-neutral.svg";
  cnImage.alt = "carbon-neutral";

  const cnText = document.createElement("span");
  const boldedText = document.createElement("strong");
  boldedText.textContent = "carbon-neutral";
  cnText.append("This is a ", boldedText, " delivery");

  cnContainer.append(cnImage, cnText);

  // console.log(cnContainer)

  return cnContainer;
}

function createOrderDisplay(id) {
  const order = createCartOrder();
  const cartMessage = createCartMessage();
  const confirmButton = createConfirmButton();
  confirmButton.addEventListener('click', () => handleConfirmButton(id));
  order.append(cartMessage, confirmButton);
  return order;
}

export {
  createActiveCart,
  handleCurrentSelection,
  createOrderDisplay,
  calculateSelection,
  calculateCartPrice,
  updateCartHeading,
};
