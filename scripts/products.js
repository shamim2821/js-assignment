// products info on array
let products = [{
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    price: "$10.90",
    image: "images/products/umbrella.jpg"
},{
    name: "Black and Gray Athletic",
    price: "$11.90",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg"
},{
    name: "backpack",
    price: "12.90",
    image: "images/products/backpack.jpg"
}]


// Generate the html with products info 
let producthtml = '';

products.forEach((e) => {
    producthtml = producthtml + `
    <div class="product-container">
        <div class="product-image-container">
        <img class="product-image" 
            src="${e.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${e.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-45.png">
        <div class="product-rating-count link-primary">
            87
        </div>
        </div>

        <div class="product-price">
        ${e.price}
        </div>

        <div class="product-quantity-container">
            <input type="number" class="option">
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart">
        Add to Cart
        </button>
    </div>
    `
});


// Showing the product html to website page
let productgrid = document.querySelector('.products-grid');
productgrid.innerHTML = producthtml;