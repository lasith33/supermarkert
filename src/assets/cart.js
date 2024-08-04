
function testhello(){
let searchform =document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>{
 searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    logingForm.classList.remove('active');
}

let shoppingcart =document.querySelector('.shopping-cart');


document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    logingForm.classList.remove('active');
}

let logingForm =document.querySelector('.login-from');


document.querySelector('#login-btn').onclick = () =>{
    logingForm.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    logingForm.classList.remove('active');
}

}
 

