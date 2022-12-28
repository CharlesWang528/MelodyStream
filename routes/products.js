const express = require('express');
const productsRepo = require('../repositories/products');
const productIndexTemplage = require('../views/products/index');
const productDetailsTemplate = require('../views/products/detail');

const router = express.Router();

router.get('/', async (req, res) =>{

    const products = await productsRepo.getAll();
    res.send(productIndexTemplage({products}));

});


router.get('/admin/products/:id/details', async (req, res) =>{
    const product = await productsRepo.getOne(req.params.id);
    if (!product){
        return res.send('Product not found');
    }
    res.send(productDetailsTemplate({product}));
});

// router.post(
//     '/admin/products/:id/details', 
//      async (req, res) =>{

//         const product = await productsRepo.getOne(req.params.id);
//         if (!product){
//             return res.send('Product not found');
//         }
//         res.send(productDetailsTemplate({product}));

// });


module.exports = router;