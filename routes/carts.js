const express = require('express');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

//receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) =>{

    //Figure out the cart
    let cart;

    if (!req.session.cartId){
        //we dont have a cart, need to create one
        //and store the cart id on the req.sesson cartId property
        cart = await cartsRepo.create({items:[]});
        req.session.cartId = cart.id;
    } else{
        //we hava a cart, need to get in from repo
        cart = await cartsRepo.getOne(req.session.cartId);
    }

    //either increment quantity for existing product

    //or add new product to items array
    console.log(cart);

    res.send("hhh");

    



});

//reeive a GET request to show all items in cart

//Receive a post request to delet an item from a cart. 

module.exports = router;