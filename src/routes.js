const express = require('express');

const routes = express.Router();

const ProductConttroler = require('./controller/ProductController')

//list products
routes.get('/?',ProductConttroler.index);
//detales
routes.get('/:id',ProductConttroler.show);
//create
routes.post('/',ProductConttroler.create);
//update
routes.put('/:id',ProductConttroler.update);
//delite
routes.delete('/:id',ProductConttroler.destroy);

module.exports=routes;

