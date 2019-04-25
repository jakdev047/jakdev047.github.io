// selecting
const filterInput = document.querySelector('#filter');


const nameInput = document.querySelector('.product-name');
const priceInput = document.querySelector('.product-price');
const addBtn = document.querySelector('.add-product');


const deleteBtn = document.querySelector('.delete-product');
const productListUl = document.querySelector('.collection');
const msg = document.querySelector('.msg');


// create store

let products = []


// get products from store (Read)
function getProductData (arr) {
  if(arr.length > 0){
    let li = '';

    arr.map(item => {
      li = document.createElement('li');
      li.className = 'list-group-item collection-item my-3';
      li.id = `product-${item.id}`;
      li.innerHTML = `<strong>${item.name}</strong>- <span class="price">$${item.price}</span>
                      <i class="fa fa-trash float-right delete-product"></i>`;
                      
      productListUl.appendChild(li);

    })
  } 
  else {
    showMessage('Please add item to your catalog');
  }
    
}

// Create products enter by the add-btn (Craete)
function addProductItem (e) {
  e.preventDefault();

  // collecting of input value
  let name = nameInput.value;
  let price = priceInput.value;

  // to generic new id
  let id;

  if( products.length === 0) {
    id = 0;
  } else {
    id = products[products.length -1 ].id + 1;
  }

  if ( name === '' || price === '' || !(!isNaN(parseFloat(price)) && isFinite(price))) {
    alert('please fill up necessary and valid information');
  }

  else {

    // add item

    let item = {
      name  : name,
      price : price,
      id : id
    }

    products.push(item);

    // remove item
    productListUl.innerHTML = '';

    // show data in DOM
    getProductData(products);

    showMessage(null);

    nameInput.value = '';
    priceInput.value = '';

  }
}

// Delete products enter by the deleteBtn (Delete)
function deleteProductItem (e) {
  e.preventDefault();

  if( e.target.classList.contains('delete-product')) {

    // delete from UI in DOM

    let target = e.target.parentElement;

    target.parentElement.removeChild(target);

    // delete from data store in products
    let id = parseInt(target.id.split('-')[1]);

    results = products.filter( product => {
      return product.id !== id;
    })

    products = results;

    if( products.length === 0) {
      showMessage('Please add item to your catalog');
    }
    else{
      showMessage(null);
    }
  }
}

// filter
function filterProductItem(e) {
  // to collect filter txt
  let filterText  = e.target.value.toLowerCase();

  // 
  let itemLength = 0;

  // to collect item list
  document.querySelectorAll('.collection-item').forEach( item => {
    let productName = item.firstElementChild.textContent.toLocaleLowerCase();

    if( productName.indexOf(filterText) === -1){
      item.style = 'display: none';
    }

    else{
      item.style = 'display: block';
      ++itemLength;
    }
  });

  itemLength > 0 ? showMessage('') : showMessage('No item found');
}

// massage alert
function showMessage(massage) {
  msg.innerHTML = massage;
}



// load all eventListener 

function loadEventListener(){

  // read
  window.addEventListener('DOMContentLoaded',getProductData.bind(null,products));

  // create
  addBtn.addEventListener('click', addProductItem);

  // delete
  productListUl.addEventListener('click', deleteProductItem);

  // filter
  filterInput.addEventListener('keyup', filterProductItem);
}

loadEventListener();
