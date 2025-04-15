const express = require('express')
const app = express();
const products = require("./data.json")
app.get('/products', (req, res)=>{
    res.json(products)
})
app.listen(3000)