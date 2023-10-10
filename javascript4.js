'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });


const products = [
  {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "This is the first product.",
      imageUrl: "https://via.placeholder.com/150",
  },
  {
      id: 2,
      name: "Product 2",
      price: 29.99,
      description: "This is the second product.",
      imageUrl: "https://via.placeholder.com/150",
  },
  {
      id: 3,
      name: "Product 3",
      price: 39.99,
      description: "This is the third product.",
      imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    description: "This is the third product.",
    imageUrl: "https://via.placeholder.com/150",
},
{
  id: 3,
  name: "Product 3",
  price: 39.99,
  description: "This is the third product.",
  imageUrl: "https://via.placeholder.com/150",
},
{
  id: 3,
  name: "Product 3",
  price: 39.99,
  description: "This is the third product.",
  imageUrl: "https://via.placeholder.com/150",
},
{
  id: 3,
  name: "Product 3",
  price: 39.99,
  description: "This is the third product.",
  imageUrl: "https://via.placeholder.com/150",
},
{
  id: 3,
  name: "Product 3",
  price: 39.99,
  description: "This is the third product.",
  imageUrl: "https://via.placeholder.com/150",
},
];

// Function to display products with images
function displayProducts(productsToDisplay) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear the product list

  productsToDisplay.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
          <h2 class="product-title">${product.name}</h2>
          <img class="product-image" src="${product.imageUrl}" alt="${product.name}">
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <p class="product-description">${product.description}</p>
          <button class="product-details" onclick="redirectToProduct(${product.id})">${"View"}</button>
      `;

      productList.appendChild(productCard);
  });
}

// Function to filter products based on search input
function filterProducts(searchText) {
  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  displayProducts(filteredProducts);
}

// Event listener for the search input
document.getElementById("searchInput").addEventListener("input", function () {
  const searchText = this.value;
  filterProducts(searchText);
});

// Call the initial display with all products
window.addEventListener("load", () => {
  displayProducts(products);
});

function redirectToProduct(productId) {
  // Replace 'product-description.html' with the actual URL of your product description page
  const product = products.find(p => p.id === productId);
  if (product) {
      window.location.href = `product-description.html?id=${product.id}}`;
  }
}

// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});
