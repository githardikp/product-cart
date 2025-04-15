
const data1 = require("./data1.json");
const data2 = require("./data2.json");


function getRandomProducts(){
    const random = Math.random();
    return random<0.5 ? data1 : data2
}

module.exports = getRandomProducts;