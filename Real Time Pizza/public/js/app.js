let addToCart = document.querySelectorAll('.add-to-cart');
function updateCart(pizza) {
    // Here i am sending the data that is pizza as a result
    // axios.post('/updateCart', pizza).then((res) => {
    //     console.log('Hello');
    // })
    // axios.post('/api/phones/create/', {
    //     phone: '123'
    // });
    // This is completely new but now understood how it work
    // Here i learn how can i send post request using client side javascript
    axios.post('/updateCart', pizza);
}
addToCart.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza);
        // This is successfully collecting the data
        console.log(pizza);
        updateCart(pizza);
    })
})

// This is register related Client Side Js
// let alreadyRegistered = document.querySelector('.alreadyRegistered');
// alreadyRegistered.style.display = "none";
// let registerBtn = document.querySelector('.registerBtn');
// registerBtn.addEventListener('click',(e)=>{
//     if(alreadyRegistered.innerText == "Already Registered")
//     {
//         alreadyRegistered.style.display = "inline";
//     }
//     console.log(alreadyRegistered.innerText);
//     e.preventDefault();
// })