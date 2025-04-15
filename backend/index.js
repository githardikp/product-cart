const express = require('express');
const getRandomProducts = require('./data');
const app = express();
app.get('/products', (req, res)=>{
    const products = getRandomProducts();
    res.json(products)
})
app.listen(3000, ()=>{
    console.log('Listening on 3000')
})