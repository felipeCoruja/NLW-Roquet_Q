const express = require('express') //importando o express

const route = express.Router()

route.get('/', (req, res)=> res.render("index"))
route.get('/room', (req,res) => res.render("room"))
route.get('/create-pass', (req,res)=> res.render("create-pass"))

module.exports = route // exportando a variável route para ser usada no server