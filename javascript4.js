'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

document.addEventListener('keypress', (event)=>{
  // 13 points the enter key
  if(event.keyCode === 13) {
    window.location.href = "#productList";
  }
    
});


const products = [
  {
      id: 1,
      name: "Digital Design by Morris Mano",
      price: 650,
      description: "In Stock",
      imageUrl: "./assets/Product_1.jpg",
  },
  {
      id: 2,
      name: "Introduction to the Algorithms",
      price: 786,
      description: "In Stock",
      imageUrl: "./assets/Product_2.jpg",
  },
  {
      id: 3,
      name: "Deli WD82DMS Scientific Calculator",
      price: 379,
      description: "In Stock",
      imageUrl: "./assets/Product_3.jpg",
  },
  {
    id: 4,
    name: "Microprocessor, AK Gautam",
    price: 264,
    description: "In Stock",
    imageUrl: "./assets/Product_4.webp",
},
{
  id: 5,
  name: "Design and Analysis of Algorithms by Vimal Kumar",
  price: 382,
  description: "In Stock",
  imageUrl: "./assets/Product_5.webp",
},
{
  id: 6,
  name: "Lenovo Ideapad 1 AMD Ryzen 5 5500U 15.6",
  price: 15000,
  description: "In Stock",
  imageUrl: "./assets/Product_6.webp",
},
{
  id: 7,
  name: "Lenovo 15.6''(13.2cm) Slim EverydayBackpack ",
  price: 200,
  description: "In stock",
  imageUrl: "./assets/Product_7.webp",
},
{
  id: 8,
  name: "Casio FX-82ES Plus Non-Programmable Scientific Calculator",
  price: 39.99,
  description: "In Stock",
  imageUrl: "./assets/Product_8.webp",
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
          <p class="product-price">Rs.${product.price.toFixed(0)}</p>
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
