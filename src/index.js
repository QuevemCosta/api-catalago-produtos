const express = require('express');

const cors = require('cors')
const app = express();


app.use(express.json());

app.use(cors())//definir de onde pode acessar o servidor
app.use('/',require('./routes'))

//
app.listen(3000);
console.log('servidor dodando na porta 3000')
