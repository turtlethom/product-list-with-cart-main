import { populateProductSection } from "./products-section/productContent.js";
import populateATCSection from "./atc-section/populateCart.js";

/**
 * 
 * Retrieving JSON data for products via Fetch API
 * @param {string} filepath - The filepath in which the Product JSON file is located
 * 
 */
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
      populateATCSection();
    })
    .catch((err) => {
      console.error("Error with fetching data: ", err);
    });
}

const productData = "../../data.json";

retrieveProductInfo(productData);