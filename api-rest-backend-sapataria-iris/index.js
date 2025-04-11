const express = require('express')
const cors = require('cors')

const routesCliente = require('./routes/routesClientes.js');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routesCliente)


app.listen(5000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5000');
});