// This is cart related Client Side Js
let Order = document.querySelector('.order');
let willDeletedOnEmptyCart = document.querySelector('.willDeletedOnEmptyCart');
let emptyCart = document.querySelector('.empty-cart');
let totalAmount = document.querySelector('.amount');
if(totalAmount.innerText == "0")
{
    Order.style.display = "none"; 
    willDeletedOnEmptyCart.style.display = "none";
}
else
{
    emptyCart.style.display = "none";
}