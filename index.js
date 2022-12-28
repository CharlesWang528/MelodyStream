const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminroductRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))  //if we want all route handlers to have this middleware function to be applied
app.use(cookieSession({
    keys:['randomstring1693']
}));
app.use(authRouter);
app.use(adminroductRouter);
app.use(productsRouter);
app.use(cartsRouter);

app.listen(3003, ()=>{
    console.log("listening")
});