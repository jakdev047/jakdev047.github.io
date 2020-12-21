// Get the UI element
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];

//buttons
let buttonsDOM = [];

// getting products
class Products {
    async getProducts() {
        try {
            let result = await fetch('data.json');
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

// UI Class
class UI {
    constructor() { }

    displayProducts(products) {
        let result = "";
        products.forEach(product => {
            result += `
            <article class="product">
              <div class="img-container">
                <img
                  src=${product.image}
                  alt="product"
                  class="product-img"
                />
                <button class="bag-btn" data-id=${product.id}>
                  <i class="fas fa-shopping-cart"></i>
                  add to cart
                </button>
              </div>
              <h3>${product.title}</h3>
              <h4>$${product.price}</h4>
            </article>
         `;
        });
        productsDOM.innerHTML = result;
    }

    getBagButtons() {
        const btns = [...document.querySelectorAll('.bag-btn')];
        buttonsDOM = btns;
        btns.forEach(btn => {
            let id = btn.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                btn.innerText = "In Cart";
                btn.disabled = true;
            }
            else {
                btn.addEventListener('click', (e) => {
                    e.target.innerText = "In Cart";
                    e.target.disabled = true;

                    // get product from products

                    // add product to cart

                    //save cart in local storage

                    // set cart values

                    // show the cart
                })
            }
        })
    }

}

// localStorage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
}

// add event listener
document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const products = new Products();

    //  display products
    products.getProducts().then(products => {
        ui.displayProducts(products);

        // local storage save
        Storage.saveProducts(products);
    }).then(() => {
        ui.getBagButtons();
    });
});