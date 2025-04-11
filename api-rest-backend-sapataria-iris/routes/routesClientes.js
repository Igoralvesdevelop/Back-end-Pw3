const express = require('express');

const modelCliente = require('../models/modelCliente.js');

const router = express.Router();

router.get('/l', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});
router.post('./inserirclientes', (req, res) => {
    let {nome , telefone , descricao , valor , valor_entrada} = req.body

    modelCliente.create(
        {
            id_cliente,
            nome,
            telefone,
            descricao,
            valor,
            data_compra,
            valor_entrada
         
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'SAPATO CADASTRADO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO CADASTRAR O SAPATO',
                errorObject:error
            }
        );
    });


});
module.exports = router;
