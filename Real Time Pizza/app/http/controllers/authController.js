const Menu = require('../../models/menu');
const userModel = require('../../models/user');
const bCrypt = require('bcrypt');
const authController = () => {
    return {
        login: function (req, res) {
            res.render('auth/login');
        },
        register: function (req, res) {
            res.render('auth/register');
        },
        postLogin: async (req, res) => {
            const pizzas = await Menu.find();
            let Email = req.body.Email;
            let Password = req.body.Password;
            let userData = await userModel.find();
            userData.forEach(function (data) {
                if (data.Email == Email && data.Password == Password) {
                    return res.render('home', { pizzas: pizzas });
                }
            });
            // Agar wrong id and password rahega toh kya karega ?
        },
        postRegister: async (req, res) => {
            //  <---here i am checking weather the user is already registered or not--->
            const Email = req.body.Email;
            try {
                let userData = await userModel.find();
                let alreadyReg = 0;
                userData.forEach(function (data) {
                    if (data.Email == Email) {
                        alreadyReg = 1;
                        res.render('auth/register', { Error: alreadyReg });
                    }
                });
            } catch (error) {
                console.log(error);
            }

            // Password Hashing 
            const hashedPassword = await bCrypt.hash(req.body.Password, 10);
            try {
                const Register = await userModel.create({
                    Name: req.body.Name,
                    Email: req.body.Email,
                    Password: req.body.Password
                });
                res.render('auth/login');
            } catch (error) {
                console.log(error);
            }
        }
    }
}
module.exports = authController