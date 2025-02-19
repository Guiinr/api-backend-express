
//importação do express
// const express = require('express');
import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

// cria o objeto app que tem todas as funções do expresss
const app = express();

// criando rota get no endereço / (raiz: http://localhost:3000)
app.get('/', (req, res) => {
    return res.json({
        message: "Seja bem vindo a API",
    })
});

app.use('/user', userRouter)
app.use('/produto', productRouter)

// sobe o servidor e fica ouvindo as rotas criadas anteriormente
app.listen(3000, () => {
    console.log('Servidor rodando na porta no http://localhost:3000')
});