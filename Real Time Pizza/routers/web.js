const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const homeController = require("../app/http/controllers/homeController");
const orderController = require("../app/http/controllers/orderController");

function initRoutes(app) {
    app.get('/', homeController().index);
    app.get('/login', authController().login);
    app.post('/login',authController().postLogin);
    app.get('/register', authController().register);
    app.post('/register',authController().postRegister);
    app.get('/cart',cartController().cart);
    app.post('/updateCart',cartController().update);
    app.post('/',orderController().Order);
}
module.exports = initRoutes;






































// Here we are using router but the above one is the best method 
// const express = require('express');
// const app = express();
// const router = express.Router();
// router.get('/', (req, res) => {
//     res.render('home');
// })

// router.get('/cart', (req, res) => {
//     res.render('customers/cart.ejs');
// })

// router.get('/login', (req, res) => {
//     res.render('auth/login');
// })
// router.get('/register', (req, res) => {
//     res.render('auth/register');
// })
// module.exports = router;
