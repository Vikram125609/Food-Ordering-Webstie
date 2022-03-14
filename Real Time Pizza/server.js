// Remember these thing that use must use app.use(express.json())
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// <-------------------------------------Problem Hai------------------------------->
// Nahi Samja Below 3 lines
// const session = require('express-session');
// const flash = require('express-flash');
// const MongoStore = require('connect-mongo')(session);
// <-------------------------------------Problem Hai------------------------------->

// Database Connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pizza", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Database Connected Successfully`);
    })
    .catch((error) => {
        console.log(error);
    });
// <-------------------------------------Problem Hai-------------------------------->

// app.use(session({
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store:mongoose.connection,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 }
// }));
// app.use(flash());

// <--------------------------------------Problem Hai-------------------------------->



// This is the model 
const Pizza = require('./app/models/menu');

// Now using static files that is CSS & JS from Public File 
app.use('/public', express.static('public'));

// Global Middelwares





// Set template engine 
app.use(expressLayout);
app.set('views', path.join(__dirname, `/views`));
app.set('view engine', 'ejs');

// Router hamesa template engine ke baad aayega this is very very important 
require('./routers/web')(app);

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});