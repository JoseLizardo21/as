const express = require("express");
const path = require('path');
//initializations
const app = express();
//settings
app.set('port', 3000 || process.env.PORT);

//Routes
app.get('/', (req, res)=>{
    res.send("Hola");
});
//Public
//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});