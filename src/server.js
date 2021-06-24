const express = require('express')//importando o express
const path = require('path')

const route = require('./route')//importando route.js 

const server = express()//inicializando o express

server.set('view engine','ejs')//o ejs é o responsável por construir o layout, nesta linha estamos setando o ejs como o view engine

server.use(express.static("public"))//passando a pasta public

server.set('views', path.join(__dirname, 'views'))//passando o caminho da pasta views onde se encontra a index.ejs

server.use(route)//usando as rotas definidas em route.js
server.listen(3000 , () => console.log("RODANDO"))//passando a porta 3000 onde irá rodar o server e uma função simplificada () => console.log() para printar na tela


