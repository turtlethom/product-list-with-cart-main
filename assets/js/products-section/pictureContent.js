import createBaseATCButton from "../util/productButtons.js";

/* Handling Creation Of `Image` Elements */
function createPicture(image, productId) {
  const picture = document.createElement("picture");
  // Setting up picture srcsets for all viewports
  const mobileSource = document.createElement("source");
  mobileSource.srcset = image.mobile;
  mobileSource.media = "(min-width: 320px) and (max-width: 425px)";

  const tabletSource = document.createElement("source");
  tabletSource.srcset = image.tablet;
  tabletSource.media = "(min-width: 425px) and (max-width: 768px)";

  /* Appending thumbnail (hidden) for order confirmation */
  const thumbnailSource = document.createElement("img");
  thumbnailSource.dataset.thumbnail = image.thumbnail;
  thumbnailSource.id = `thumbnail-${productId}`;

  // Setting default image for each product
  const defaultImg = document.createElement("img");
  defaultImg.src = image.desktop;

  // Appending all image sources to new `<picture>`
  picture.append(mobileSource, tabletSource, thumbnailSource, defaultImg);
  picture.id = `img-${productId}`;

  return picture;
}

function createPictureContent(image, productId) {
  const content = document.createElement("div");
  /* Creating <picture> Element */
  const picture = createPicture(image, productId);
  picture.classList.add("product-picture");

  /* Creating ATC <button> Element */
  const atcSVG = "./assets/images/svg/icon-add-to-cart.svg";
  const atcButton = createBaseATCButton(atcSVG, "Add To Cart", productId);

  content.append(picture, atcButton);
  content.id = `product-${productId}-images`;

  return content;
}

export default createPictureContent;
