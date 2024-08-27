import populateProductSection from "./products-section/productContent.js";
import populateATCSection from "./atc-section/populateCart.js";

/* Retrieving JSON data for products via Fetch API */
function retrieveProductInfo(filepath) {
  fetch(filepath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not retrieve data", response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      populateProductSection(data);
      populateATCSection(data);
    })
    .catch((err) => {
      console.error("Error with fetching data: ", err);
    });
}

const productData = "../../data.json";

retrieveProductInfo(productData);

/*
Product Item Layout Example
<div class="product-card">
    <div class="picture-content">
        <picture class="product-picture stacked" id="product-{id}" cartcount="0">{productImages}</picture>
        <button class="atc-btn fw-600 text-rose-900 product-fs" id="atc-{id}">
            <img src="./assets/images/icon-add-to-cart.svg">
            Add To Cart
        </button>
        <!--Replacing "atc-btn" with "atc-counter-btn"-->
        <div class="atc-counter-btn">
          <button class="decrement">
            <svg width="10" height="2" fill="none" viewBox="0 0 10 2" class="centered">
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"></path>
            </svg>
          </button>
          <span>1</span>
          <button class="increment">
            <svg width="10" height="10" fill="none" viewBox="0 0 10 10" class="centered">
              <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"></path>
            </svg>
          </button>
        </div>
    </div>
    <div class="product-content">
        <p1 class="product-category">{category}</p1>
        <h2 class="product-name">{productName}</h2>
        <p2 class="product-price">{price}</p2>
    </div>
</div>
*/
