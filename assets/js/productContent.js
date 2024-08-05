/* Handling Creation Of `Image` Elements */
function createPicture(image) {
    const picture = document.createElement('picture');
    // Setting up picture srcsets for all viewports
    const mobileSource = document.createElement('source');
    mobileSource.srcset = image.mobile;
    mobileSource.media = "(min-width: 320px) and (max-width: 425px)";

    const tabletSource = document.createElement('source');
    tabletSource.srcset = image.tablet;
    tabletSource.media = "(min-width: 425px) and (max-width: 728px)";

    // Setting default image for each product
    const defaultImg = document.createElement("img");
    defaultImg.src = image.desktop;

    // Appending all image sources to new `<picture>`
    picture.append(mobileSource, tabletSource, defaultImg);

    return picture;
}

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

/* Handling Creation Of ATC <button> Element */
function createButton(source, text) {
    const button = document.createElement('button');

    const buttonImg = document.createElement('img');
    buttonImg.src = source;

    const buttonText = document.createTextNode(text);

    const buttonClasses = [
        'atc-btn',
        'fw-600',
        'text-rose-900',
        'product-fs',
    ];
    button.append(buttonImg, buttonText);
    button.classList.add(...buttonClasses);

    return button;
}

function createPictureContent(image) {
    const content = document.createElement('div');

    /* Creating <picture> Element */
    const picture = createPicture(image);
    picture.classList.add('product-picture');

    /* Creating ATC <button> Element */
    const atcSVG = './assets/images/icon-add-to-cart.svg';
    const atcButton = createButton(atcSVG, 'Add To Cart');

    content.append(picture, atcButton);

    return content;
}

/* Using JSON data To Dynamically Create All Available Products */
function populateProductSection(jsonData) {
    const productGrid = document.getElementById('product-grid');
    /* Iterate over the Product Data */
    for (let i = 0; i < jsonData.length; i++) {
        const { image, name, category, price } = jsonData[i];

        /* Creating Product Container */
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        /* Creating The Picture Content w/ Images & ATC Button */
        const pictureContent = createPictureContent(image);
        pictureContent.classList.add('picture-content');

        /* Creating Product Content w/ Name, Category, & Price */
        const productContent = createProductContent(name, category, price);
        productContent.classList.add('product-content');

        /* Appending All Elements To Product Card */
        productCard.append(pictureContent, productContent);

        /* Appending All Elements To Product Section */
        productGrid.append(productCard);
    }
}

export default populateProductSection;