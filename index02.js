document.addEventListener("DOMContentLoaded", function () {
  const minusButton = document.querySelector(".btn1");
  const plusButton = document.querySelector(".btn2");
  const quantityInput = document.querySelector(".quantity input");
  minusButton.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 0) {
      quantityInput.value = currentValue - 1;
    }
  });
  plusButton.addEventListener("click", function () {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });
});
// -------------------------------cart------------------
document.querySelector("#shop").addEventListener("click", function () {
  var cart = document.querySelector(".cart");
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
});
document.addEventListener("click", function (event) {
  var cart = document.querySelector(".cart");
  var isClickInsideCart = cart.contains(event.target);
  var isClickOnShop = document.querySelector("#shop").contains(event.target);

  if (!isClickInsideCart && !isClickOnShop) {
    cart.style.display = "none";
  }
});
document.querySelector(".cart").addEventListener("click", function (event) {
  event.stopPropagation();
});
// -------------------------------zoom--------------------------
document
  .querySelector(".big_img_left_section1")
  .addEventListener("click", function () {
    var zoom = document.querySelector(".zoom");
    if ((zoom.style.display = "none")) {
      zoom.style.display = "block";
    } else {
      zoom.style.display = "none";
    }
  });
document.addEventListener("click", function (event) {
  var zoom = document.querySelector(".zoom");
  var isClickInsideZoom = zoom.contains(event.target);
  var isClickOnBigImg = document
    .querySelector(".big_img_left_section1")
    .contains(event.target);
  if (!isClickInsideZoom && !isClickOnBigImg) {
    zoom.style.display = "none";
  }
});
document.querySelector(".zoom").addEventListener("click", function (event) {
  event.stopPropagation();
});
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-1.jpg",
    "./ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-2.jpg",
    "./ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-3.jpg",
    "./ecommerce-product-page-main/ecommerce-product-page-main/images/image-product-4.jpg",
  ];

  let currentIndex = 0;

  const bigImg = document.getElementById("bigImg");
  const btnGoLeft = document.querySelector(".btn_goLeft");
  const btnGoRight = document.querySelector(".btn_goRight");

  function updateImage() {
    bigImg.src = images[currentIndex];
  }

  btnGoLeft.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateImage();
  });

  btnGoRight.addEventListener("click", function () {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateImage();
  });

  updateImage();
});

let store = [];
let image = document.querySelector("#bigImg").src;
let Name = document.querySelector(".p1_right_section1").textContent;
let price = document.querySelector(".p1_price").textContent;

function addToStore() {
  let quantity = document.querySelector(".input1").value;
  store.push({ image, Name, price, quantity });
  for (let i = 0; i < store.length; i++) {
    if (store.quantity > "0") {
    }
    let bodyCart = document.querySelector(".medium_cart");
    bodyCart.style.display = "none";
    let shop = document.querySelector(".secondPart");
    shop.style.display = " none";
    let message = document.querySelector(".empty");
    message.style.display = "block";
  }
}
let mainImg = document.getElementById("mainImg");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
img1.addEventListener("click", () => {
  mainImg.src = img1.src;
});
img2.addEventListener("click", () => {
  mainImg.src = img2.src;
});
img3.addEventListener("click", () => {
  mainImg.src = img3.src;
});
img4.addEventListener("click", () => {
  mainImg.src = img4.src;
});
let container = document.querySelector(".secondPart");
let cart = document.querySelector("");
