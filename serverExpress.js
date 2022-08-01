const Contenedor = require("./Contenedor");
const express = require('express');
const app = express();
const PORT = 3000;
const contenedor = new Contenedor("./productos.txt");

app.get('/', (req, res) => {
    res.send('Express Server!')
});

app.get('/products', async (req, res) => {
    const allProducts = await contenedor.getAll();
    res.json(allProducts);
});

app.get('/randomProduct', async (req, res) => {
    const allProducts = await contenedor.getAll();
    const maxId = allProducts.length;
    
    const randomNumber = generateRandomNumber(1, maxId);
    const randomProduct = await contenedor.getById(randomNumber);

    res.json(randomProduct);

})

const generateRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

const server = app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})

server.on('error', (error) => console.log(error));