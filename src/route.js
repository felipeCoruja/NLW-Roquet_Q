const express = require('express') //importando o express
const questionController = require('./controllers/questionController')//importando questionController
const roomController = require('./controllers/roomController')

const route = express.Router()

route.get('/', (req, res)=> res.render("index",{page: 'enter-room'}))//renderiza a index com a variável page contendo o pedaço de código HTML enter-room.js
route.get('/create-pass', (req,res)=> res.render("index", {page: 'create-pass'}))//renderiza a index com a variável page contendo o pedaço de código HTML create-pass.js


route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enterroom', roomController.enter)


route.post('/question/create/:room', questionController.create)
//Rota da ação a ser executada após os eventos da modal => Marcar como lida ou Excluir 
route.post('/question/:varRoom/:questionId/:action', questionController.index)// quando se usa dois pontos ':' se indica uma variável



module.exports = route // exportando a variável route para ser usada no server