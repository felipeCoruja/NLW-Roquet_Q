const express = require('express') //importando o express

const route = express.Router()

route.get('/', (req, res)=> res.render("index",{page: 'enter-room'}))
route.get('/create-pass', (req,res)=> res.render("index", {page: 'create-pass'}))

route.get('/room', (req,res) => res.render("room"))

const questionController = require('./controllers/questionController')//importando questionController

//Rota da ação a ser executada após os eventos da modal
route.get('/romm/:varRoom/:questionId/:action', questionController.index)// quando se usa dois pontos ':' se indica uma variável

module.exports = route // exportando a variável route para ser usada no server