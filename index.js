require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.json());

// use express router
app.use('/', require('./routes'));

app.listen(PORT, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${PORT}`);
});