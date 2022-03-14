const nodemailer = require('nodemailer');
const Menu = require('../../models/menu');
const cartData = require('../../models/cart');
const userModel = require('../../models/user');
const orderController = () => {
    return {
        Order: async (req, res) => {
            const pizzas = await Menu.find();
            const insideCart = await cartData.find();
            const totalQuantity = await cartData.countDocuments();
            let totalPrice = 0;
            insideCart.forEach(function(pizza,index){
                totalPrice = totalPrice + parseInt(pizza.price);
            })
            const userData = await userModel.find();
            console.log(userData[0].Email);
            await cartData.deleteMany();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'vs125609@gmail.com',
                    pass: 'Vikram@123',
                }
            });
            const mailOption = {
                from: 'vs125609@gmail.com',
                to: `${userData[0].Email}`,
                subject: 'Your Order Placed Successfully',
                text: `Your Order Consist of total ${totalQuantity} items and the total Price for that ${totalPrice}`
            };
            transporter.sendMail(mailOption, (error, info) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("Email Sent Successfully " + info.response);
                }
            })
            return res.render('home', { pizzas: pizzas });
        }
    }
}
module.exports = orderController;