const express = require('express');

const modelCliente = require('../models/modelCliente.js');

const router = express.Router();

router.get('/l', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});
router.post('/inserirclientes', (req, res) => {
    let {id, nome , telefone , descricao ,endereco, valor , entrada, imagem} = req.body

    modelCliente.create(
        {
            id,
            nome,
            telefone,
            descricao,
            endereco,
            valor,
            entrada,
            imagem
         
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
router.get('/listagemShoes', (req, res)=>{

    modelCliente.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'SAPATOS LISTADOS COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS SAPATOS',
                errorObject:error
            }
        );
    });



});

/* ROTA DE LISTAGEM DE LIVRO POR CÓDIGO DE LIVRO*/
router.get('/listagemShoes', (req, res)=>{



    modelCliente.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'SAPATOS RECUPERADO COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO RECUPERAR O SAPATO',
                errorObject:error
            }
        );
    });


});

/* ROTA DE EXCLUSÃO DE LIVRO */
router.delete('/excluirShoes/:id', (req, res)=>{

    let { id } = req.params;

    modelCliente.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'SAPATP EXCLUIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO EXCLUIR O SAPATO',
                errorObject:error
            }
        );
    });

   

});

/* ROTA DE ALTERAÇÃO DE LIVRO */
router.put('/alterarShoes', (req, res)=>{

    let { id, nome, telefone,descricao, endereco,  valor, entrada } = req.body;

    modelCliente.update(
        {
            nome,
            telefone,
            descricao,
            endereco,
            valor,
            entrada
            
        },
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'SAPATOS ALTERADO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO ALTERAR O SAPATO',
                errorObject:error
            }
        );
    });



});
router.get('/listagemShoes/:id', (req, res) => {
    const { id } = req.params;

    modelCliente.findByPk(id)
        .then((response) => {
            if (response) {
                return res.status(200).json({
                    errorStatus: false,
                    mensageStatus: 'SAPATO RECUPERADO COM SUCESSO',
                    data: response
                });
            } else {
                return res.status(404).json({
                    errorStatus: true,
                    mensageStatus: 'SAPATO NÃO ENCONTRADO'
                });
            }
        })
        .catch((error) => {
            return res.status(400).json({
                errorStatus: true,
                mensageStatus: 'HOUVE UM ERRO AO RECUPERAR O SAPATO',
                errorObject: error
            });
        });
});

module.exports = router;
