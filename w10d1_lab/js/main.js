const BASE_URL = "http://localhost:3000/api/v1";

// API Routes
// all products (http://localhost:3000/api/v1/products)
// single product (http://localhost:3000/api/v1/products/id)
// post product (http://localhost:3000/api/v1/products)
// edit product (http://localhost:3000/api/v1/products/id)

// Create a helper module to make fetch requests to get, post, getOne, update products
const Product = {
  // fetch all products from server
  all() {
    return fetch(`${BASE_URL}/products`, {
      credentials: 'include' }).then(res => res.json());
  },
  // fetch a single product
  one(id) {
    return fetch(`${BASE_URL}/products/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // creating a product
  create(params) {
    return fetch(`${BASE_URL}/products`, {
      method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // updating a product
  update(id, params) {
		return fetch(`${BASE_URL}/products/${id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(params)
		}).then((res) => res.json());
	}
};

// Helper Function for dollar format
function formatDollar(num) {
  let p = num.toFixed(2).split(".");
  return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
  }, "") + "." + p[1];
}

// Test Case
if (false) {
  // To get a single product
  Product.one(452).then(data => console.log(data));
  // get all products
  Product.all().then(products => console.log(products));
  Product.create({
    title: "milk which is expired yesterday-5",
    description: "very fresh!",
    price: "99.99"
  }).then(data => console.log(data));
}


// Render all products
// 1. we click on the product link => wanna trigger an on click event
// 2. make our ajax request to get all products 
function renderingProducts(products) {
  const productsContainer = document.querySelector('ul.product-list');
  productsContainer.innerHTML = products
    .map(p => {
      return `
            <li>
              <a class="product-link" data-id="${p.id}" href="">
                <span>${p.id} - </span>
                ${p.title}
              </a>
            </li>
          `;
    })
    .join("");
}

// Render a Single Product
function renderProductDetails(product) {
  const productDetailsContainer = document.querySelector('#product-show');
  const htmlString = `
        <h1>${product.title}</h1>
        <p>${product.description}</p>
        <p>${formatDollar(product.price)}</p>
        <small>Posted by: ${product.seller.full_name}</small>
        <a class="link" data-target="product-edit" data-id="${product.id}" href="">Edit</a>
        <h3>Reviews</h3>
        <ul>
          ${product.reviews.map(r => `<li>${r.rating} Star | ${r.body}</li>`).join("")}
        </ul>
      `;
  productDetailsContainer.innerHTML = htmlString;
}

// Get and Display a single product
function getAndDisplayProduct(id) {
  Product.one(id).then(product => {
    // a function to render the product
    renderProductDetails(product);
    // navigate to product show page
    navigateTo("product-show");
  });
}

// Refresh Products
function refreshProducts() {
  Product.all().then(products => renderingProducts(products));
}

// populate form
function populateForm(id) {
  Product.one(id).then(product => {
    document.querySelector('#edit-product-form [name=title]').value = product.title;
    document.querySelector('#edit-product-form [name=description]').value = product.description;
    document.querySelector('#edit-product-form [name=price]').value = product.price;
    document.querySelector('#edit-product-form [name=id]').value = product.id;
  });
}

// Navigation
function navigateTo(sectionId, clickedLink) {
  if (sectionId === 'product-index') {
    refreshProducts();
  }

  document.querySelectorAll('.page').forEach(node => {
    node.classList.remove('active');
  }) 

  document.querySelector(`.page#${sectionId}`).classList.add('active');

  if (clickedLink) {
    document.querySelectorAll('.navbar a').forEach(link => {
      link.classList.remove('active');
    })

    clickedLink.classList.add('active');
  }
}


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {

  document.querySelector(".navbar").addEventListener('click', event => {
    const link = event.target.closest("[data-target]");
    // console.log("event target>>>>>>", event.target);
    // console.log("link>>>>>>", link);
    if(link) {
      // prevent broswer default reload on click
      event.preventDefault();
      // grab the target page
      const targetPage = link.getAttribute("data-target");
      // navigate to it
      navigateTo(targetPage, link);
    }
  });

  // Add a click event listener to each product
  document.querySelector("ul.product-list").addEventListener("click", event => {
    const productLink = event.target.closest("[data-id]");
    if (productLink) {
      event.preventDefault();
      const { id } = productLink.dataset;
      // now that we have id of the product we can get the product first then show it 
      getAndDisplayProduct(id);
    }
  });

  // Add event listener to create product button
  const newProductForm = document.querySelector('#new-product-form');
  newProductForm.addEventListener('submit', event => {
    event.preventDefault();

    // grab the inputs from the form and create an object for you
    const formData = new FormData(event.target);
    const newProduct = {
      title: formData.get('title'),
      description: formData.get("description"),
      price: formData.get('price')
    };

    // Call Product.create function that we created with newProduct
    Product.create(newProduct).then(product => {
      // clear form
      newProductForm.reset();
      // display the question that we just created
      getAndDisplayProduct(product.id);
    });
  });

  // pre-populate and navigate to the product that we want to update
  document.querySelector('#product-show').addEventListener("click", event => {
    const link = event.target.closest("[data-target]");
console.log(link);
    if (link) {
      event.preventDefault();
      // populate the form with product data
      populateForm(link.getAttribute("data-id"));
      // Navigate to the product that we want to update
      const targetPage = link.getAttribute("data-target");
      navigateTo(targetPage);
    }
  });

  // update a question
  const editProductForm = document.querySelector('#edit-product-form');
  editProductForm.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updatedProduct = {
      title: formData.get('title'),
      description: formData.get("description"),
      price: formData.get('price')
    };

    Product.update(formData.get("id"), updatedProduct).then(product => {
      // clear form
      editProductForm.reset();
      // get and display it
      getAndDisplayProduct(product.id);
    })
  })
})

// Helper module to sign users in
const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}
Session.create({
  email: "js@winterfell.gov",
  password: "supersecret"
})