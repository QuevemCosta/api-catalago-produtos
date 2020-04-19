const crypto = require('crypto')
const connect = require('../database/connect')

module.exports={
    async index(request,response){
        const products = await connect('products').select('*');
        return response.json(products)
    },

    //create
    async create(request,response){
        const {
                name,
                descricao,
                valorAvista,
                valorAprazo,
                categoria,
                status,
                parcelas,
                img
            } = request.body;

            //gera codigo de produto que tambem sera sua chave primaria
            const cod = crypto.randomBytes(4).toString('HEX');  

            await connect('products').insert({
                cod,
                name,
                descricao,
                valorAvista,
                valorAprazo,
                categoria,
                status,
                parcelas,
                img
            })
            return response.json({
                cod,
                name,
                descricao,
                valorAvista,
                valorAprazo,
                categoria,
                status,
                parcelas,
                img
            });

    },
    async show(request,response){
        const {id} = request.params;
        const product  = await connect('products').where('cod',id ).select('*');
        return response.json(product)
        
    },
    async update(request,response){
        const {id} = request.params;
        const {
            name,
            descricao,
            valorAvista,
            valorAprazo,
            categoria,
            status,
            parcelas,
            img,
        } = request.body
        
        const product = await connect('products')
        .where('cod',id)
        .update({
            name,
            descricao,
            valorAvista,
            valorAprazo,
            categoria,
            status,
            parcelas,
            img,
        })
        return response.json(product)
    },
    async destroy(request,response){
        const {id} = request.params;
        await connect('products')
        .where('cod','=',id)
        .del()
        return response.send('Sucesso')
    }
}