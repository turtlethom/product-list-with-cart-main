import createPictureContent from "./pictureContent.js";

/**
 * Resets The Individual Styling And Buttons Of
 * A Product In The Product Grid
 * 
 * @param {number} id - The product ID of the Deleted Selected Item
 * 
 */
function resetSelectedProduct(id) {
    document.getElementById(`counter-${id}`).remove();
    document.getElementById(`base-atc-${id}`).classList.remove("hidden");
    document.getElementById(`img-${id}`).classList.remove("selected");
}

/**
 * Handles The Creation Of The Product Description For Each Product.
 * A unique ID is assigned to each potential product sequencially
 * 
 * @param {string} name - Product Name 
 * @param {string} category - Product Category
 * @param {string} price - Product Listed Price
 * @param {number} productId - Unique ID For Product
 * 
 * @returns {HTMLDivElement} - Content For Product Description
 * 
 */
function createProductContent(name, category, price, productId) {
    /* Creating `name`, `category`, & `price` elements */
    const nameElement = document.createElement('h2');
    const categoryElement = document.createElement('p');
    const priceElement = document.createElement('p');
    
    const nameText = document.createTextNode(name);
    const categoryText = document.createTextNode(category);
    const priceText = document.createTextNode('$' + parseFloat(price).toFixed(2));
    
    // Appending all text nodes to their elements
    nameElement.append(nameText);
    categoryElement.append(categoryText);
    priceElement.append(priceText);

    // Defining CSS classes for contained elements in arrays
    const nameClasses = [
        'product-name',
        'text-rose-900',
        'fw-500',
        'product-fs',
        'prevent-select',
    ];
    const categoryClasses = [
        'product-category',
        'text-rose-500',
        'fw-600',
        'product-fs',
        'prevent-select',
    ];
    const priceClasses = [
        'product-price',
        'text-red',
        'fw-700',
        'product-fs',
        'prevent-select',
    ];

    nameElement.classList.add(...nameClasses);
    categoryElement.classList.add(...categoryClasses);
    priceElement.classList.add(...priceClasses);

    // Adding elements to a wrapper div for styling
    const content = document.createElement('div');
    content.append(categoryElement, nameElement, priceElement);
    content.id = `product-${productId}-details`

    return content;
}

/**
 * 
 * Dynamically Populates The Product Grid Utilizing JSON Data.
 * JSON Format => { image, name, category, price }
 * 
 * @param {JSON} jsonData - Represents The JSON data from 'data.json'
 * 
 */
function populateProductSection(jsonData) {
    const productGrid = document.getElementById('product-grid');
    /* Iterate over the Product Data */
    let productId = 1;
    for (let i = 0; i < jsonData.length; i++) {
        const { image, name, category, price } = jsonData[i];

        /* Creating Product Container */
        const productCard = document.createElement('div');
        productCard.id = `product-${productId}`;
        productCard.classList.add('product-card');
        productCard.dataset.count = 0;

        /* Creating The Picture Content w/ Images & ATC Button */
        const pictureContent = createPictureContent(image, productId);
        pictureContent.classList.add('picture-content', 'stacked');
        /* Creating Product Content w/ Name, Category, & Price */
        const productContent = createProductContent(name, category, price, productId);
        productContent.classList.add('product-content');
        /* Creating Unique Ids */
        productId++;
        /* Appending All Elements To Product Card */
        productCard.append(pictureContent, productContent);
        /* Appending All Elements To Product Section */
        productGrid.append(productCard);
    }
}

export { resetSelectedProduct, populateProductSection };