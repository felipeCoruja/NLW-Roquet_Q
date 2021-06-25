const Database = require('../db/config')


module.exports = {
   
    index(req,res){
        const roomId = req.params.varRoom
        const questionId = req.params.questionId
        const action = req.params.action
        const password = req.body.password//pegando a senha usando o nome do input do form modal
        
        
    }, 

    async create(req,res){
        const db = await Database()
        const question = req.body.question
        const room = req.params.room
   

        await db.run(`INSERT INTO question(title,room,read) VALUES("${question}",${room},0)`)
        db.close

        res.redirect(`/room/${room}`)

    }
}