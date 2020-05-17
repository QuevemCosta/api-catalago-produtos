const express = require('express');

const routes = express.Router();

//Products Routes
const ProductConttroler = require('./controller/ProductController')

//list products
routes.get('/produtcts/?',ProductConttroler.index);
//detales
routes.get('/produtct/:id',ProductConttroler.show);
//create
routes.post('/produtct/',ProductConttroler.create);
//update
routes.put('/produtct/:id',ProductConttroler.update);
//delite
routes.delete('/produtct/:id',ProductConttroler.destroy);


//Routes Categories
const CategoriesConttroler = require('./controller/CategoriesController');
routes.get('/categories/?',CategoriesConttroler.index);

routes.post('/categories/',CategoriesConttroler.create);




module.exports=routes;

