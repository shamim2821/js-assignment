// All variables 
const addbutton = document.querySelectorAll('.js-add-to-cart');
const cartnumber = document.querySelector('.cart-quantity');
const optionvalue = document.querySelector('.option');
const selectoption = document.querySelector('.selectitem');


// All event listener
addbutton.forEach(element => {
    element.addEventListener('click', addproduct);
});



// All functions 
let cart_quantity = 0;
function addproduct(){

    selectoption.forEach((e) => {
        console.log(e.value);
    })
    



    if (optionvalue.value == ''){
        cart_quantity = cart_quantity + 1;
    }else{
        cart_quantity = cart_quantity + Number(optionvalue.value);
    }
     
    

    cartnumber.innerHTML = cart_quantity;

}