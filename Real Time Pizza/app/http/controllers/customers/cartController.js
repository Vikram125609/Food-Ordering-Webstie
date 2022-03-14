const cartData = require("../../../models/cart");

// All Controller related to customer
const cartController = () => {
    return {
        cart: async (req, res) => {
            // Now here i have to get the data from the MongoDb that is stored in the Cart Section
            try {
                const Data = await cartData.find();
                res.render('customers/cart.ejs', { Datas: Data });
            } catch (error) {
                console.log(error);
            }
        },
        update: async (req, res) => {
            try {
                // Here i learned from 6 Pack Programmer that we can use .create function to store something in the database
                // Lets assume here the quantity should be only one as of Now
                const cartdata = await cartData.create(req.body);
                console.log(cartdata);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
module.exports = cartController
