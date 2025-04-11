const Sequelize = require('sequelize');
const connection = require('../database/database.js');





const modelCliente = connection.define(
    'clientes',
    {
        id_cliente: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          nome: {
            type: Sequelize.STRING(100),
            allowNull: false,
          },
          telefone: {
            type: Sequelize.STRING(20),
            allowNull: false,
          },
          descricao: {
            type: Sequelize.STRING(50),
            allowNull: true,
          },
          valor: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
          },
          data_compra: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: true,
          },
          valor_entrada: {
            type: Sequelize.DECIMAL(10, 2),
            defaultValue: 0,
            allowNull: true,
          }
    }
);



//modelCliente.sync({force:true});

module.exports = modelCliente;