const express = require('express');

const app = express();

app.use(express.json());

app.use('/',require('./routes'))

//
app.listen(3333);
console.log('servidor dodando na porta 3333')