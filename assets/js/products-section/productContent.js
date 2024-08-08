import createPictureContent from "./pictureContent.js";

const productCounts = {};

/* Handling Creation Of The Product Description */
function createProductContent(name, category, price) {
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
        
    ];
    const categoryClasses = [
        'product-category',
        'text-rose-500',
        'fw-600',
        'product-fs',
    ];
    const priceClasses = [
        'product-price',
        'text-red',
        'fw-700',
        'product-fs',
    ];

    nameElement.classList.add(...nameClasses);
    categoryElement.classList.add(...categoryClasses);
    priceElement.classList.add(...priceClasses);

    // Adding elements to a wrapper div for styling
    const content = document.createElement('div');
    // ORDERING HERE IS DIFFERENT!!!
    content.append(categoryElement, nameElement, priceElement);

    return content;
}

/* Using JSON data To Dynamically Create All Available Products */
function populateProductSection(jsonData) {
    const productGrid = document.getElementById('product-grid');
    /* Iterate over the Product Data */
    let productId = 1;
    for (let i = 0; i < jsonData.length; i++) {
        const { image, name, category, price } = jsonData[i];

        /* Creating Product Container */
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.id = `product-${productId}`;
        productCard.setAttribute('cartCount', 0);

        /* Creating The Picture Content w/ Images & ATC Button */
        const pictureContent = createPictureContent(image);
        pictureContent.classList.add('picture-content', 'stacked');

        /* Creating Product Content w/ Name, Category, & Price */
        const productContent = createProductContent(name, category, price);
        productContent.classList.add('product-content');

        /* Appending All Elements To Product Card */
        productCard.append(pictureContent, productContent);

        /* Appending All Elements To Product Section */
        productGrid.append(productCard);

        /* Creating Unique Ids */
        console.log(productId)
        productId++;
    }
}

export default populateProductSection;