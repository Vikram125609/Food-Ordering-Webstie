const Menu = require('../../models/menu');
// This is a factory function will return a object
const homeController = () => {
    return {
        index: async (req, res) => {
            try {
                const pizzas = await Menu.find();
                // console.log(pizzas);
                return res.render('home', { pizzas: pizzas });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
module.exports = homeController;
// Objects ke andar jo bhi functin hota hai usse method kehte hai Narayan Narayana