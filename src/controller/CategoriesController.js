const connect = require('../database/connect');

module.exports={
    async index(request,response){
        const categories = await connect('categories').select('*');

        return response.json(categories);
    },
    async create(request,response){
        const {name,descricao} = request.body;
        const categories = await connect('categories').insert({name,descricao});

        return response.send(categories);
    },
}