//express
const express = require('express');
const app = express();

//route
const routerMeteo = require('./route/meteoRoute.js');

//using express
app.use(express.json());

//port
port = 3000;

//path
app.use('./api/v1', routerMeteo);

const start = async () => {
    try {
        app.listen(port, console.log(`http://localhost:${port}`));
    }
    catch (error) {
        console.log(error);
    }

};


start();

