const express = require('express'); 
const webpack = require('webpack');
const bodyParser = require('body-parser');
const path = require('path');
const driver = new express();

driver.use(bodyParser.urlencoded({ extended: false }));
driver.use(bodyParser.json());
driver.use(express.static(__dirname + '/dist'));
driver.get('/',(req,res,next)=>{
    console.log(path.join(__dirname, './dist/index.html'))
    res.render('index');
});

driver.listen(5000);