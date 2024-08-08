import createATCButton from "../buttons.js";

/* Create Unique Ids For Each ATC Button */
let atcButtonId = 0;
/* Handling Creation Of `Image` Elements */
function createPicture(image) {
  const picture = document.createElement("picture");
  // Setting up picture srcsets for all viewports
  const mobileSource = document.createElement("source");
  mobileSource.srcset = image.mobile;
  mobileSource.media = "(min-width: 320px) and (max-width: 425px)";

  const tabletSource = document.createElement("source");
  tabletSource.srcset = image.tablet;
  tabletSource.media = "(min-width: 425px) and (max-width: 768px)";

  // Setting default image for each product
  const defaultImg = document.createElement("img");
  defaultImg.src = image.desktop;

  // Appending all image sources to new `<picture>`
  picture.append(mobileSource, tabletSource, defaultImg);

  return picture;
}

function createPictureContent(image) {
  const content = document.createElement("div");
  /* Creating <picture> Element */
  const picture = createPicture(image);
  picture.classList.add("product-picture");

  /* Creating ATC <button> Element */
  const atcSVG = "./assets/images/icon-add-to-cart.svg";
  const atcButton = createATCButton(atcSVG, "Add To Cart");
  atcButtonId++;
  atcButton.id = `atc-${atcButtonId}`;
  
  content.append(picture, atcButton);

  return content;
}

export default createPictureContent;
