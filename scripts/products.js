//All the variables
let productgrid = document.querySelector('.products-grid');
const cartnumber = document.querySelector('.cart-quantity');
let cart_quantity = 0;






// putting products info on array
let products = [{
    name: "Black and Gray Athletic umbrella",
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
},{
    name: "electric-glass-and-steel-hot-water-kettle",
    price: "13.90",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp"
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


        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-name = "${e.name}">
        Add to Cart
        </button>
    </div>
    `
});


// Showing the product html to website page

productgrid.innerHTML = producthtml;
const addbutton = document.querySelectorAll('.js-add-to-cart');
const input_quantity = document.querySelectorAll(".option");
let table = document.querySelector('.table')


addbutton.forEach((button) => {
    
    

    button.addEventListener('click', () => {

        let productname = button.dataset.productName;
        let matchingitem;

        
        


        cart_quantity += 1;

        cartnumber.innerHTML = cart_quantity;

        var newrow = document.createElement('tr');
        newrow.classList.add("newdesign");

        newrow.innerHTML = `
             <tr>
                 <th>${productname}</th>
                 <th><button type = 'button' onclick = "removebutton(this)">Remove</button></th>
             </tr>
             `;


        function removenewrow(){
            table.removeChild(newrow);
        }
        

        console.log(newrow)

            

        table.appendChild(newrow);
        
    });
});


function removebutton(button){

    const rowTOremove = button.parentNode.parentNode;
    rowTOremove.parentNode.removeChild(rowTOremove);

    cart_quantity -= 1;

    cartnumber.innerHTML = cart_quantity;


}






