
//importação do express
// const express = require('express');
import express from 'express'

// cria o objeto app que tem todas as funções do expresss
const app = express();

// criando rota get no endereço / (raiz: http://localhost:3000)
app.get('/', (req, res) => {
    return res.json({
        message: "Chamada a rota GET",
    })
});

app.post('/', (req, res) => {
    return res.json({
        message: "Chamada a rota POST",
    })
});

app.patch('/', (req, res) => {
    return res.json({
        message: "Chamada a rota PATCH",
    })
});

app.put('/', (req, res) => {
    return res.json({
        message: "Chamada a rota PUT",
    })
});

app.delete('/', (req, res) => {
    return res.json({
        message: "Chamada a rota DELETE",
    })
});

app.delete('/user', (req, res) => {
    return res.json({
        message: "Chamada a rota DELETE no endpoint /user"
    })
})

// sobe o servidor e fica ouvindo as rotas criadas anteriormente
app.listen(3000, () => {
    console.log('Servidor rodando na porta no http://localhost:3000')
});