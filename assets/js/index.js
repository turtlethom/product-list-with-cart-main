import populateProductSection from "./products-section/productContent.js";

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
    })
    .catch((err) => {
      console.error("Error with fetching data: ", err);
    });
}

const productData = "../../data.json";

retrieveProductInfo(productData);

/*
Product Item Layout
<div class="product-card">
    <div class="picture-content">
        <picture class="product-picture">{productImages}</picture>
        <button class="atc-btn">
            <img src="./assets/images/icon-add-to-cart.svg">
            Add To Cart
        </button>
        <!--Replacing "atc-btn" with "atc-counter-btn"-->
    </div>
    <div class="product-content">
        <h2 class="product-name">{productName}</h2>
        <p1 class="product-category">{category}</p1>
        <p2 class="product-price">{price}</p2>
    </div>
</div>
*/
