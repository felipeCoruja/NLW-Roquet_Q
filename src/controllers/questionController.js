const Database = require('../db/config')


module.exports = {
   
    async index(req,res){
        const db = await Database()
        const roomId = req.params.varRoom
        const questionId = req.params.questionId
        const action = req.params.action
        const password = req.body.password//pegando a senha usando o nome do input do form modal
        
        //verificando se a senha está correta 

        const verifayRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)

        if(verifayRoom.pass == password ){
            if(action == "delete"){

                await db.run(`DELETE FROM question WHERE id = ${questionId}`)

            }else if(action == "check"){

                await db.run(`UPDATE question SET read = 1 WHERE id = ${questionId}`)

            }
            res.redirect(`/room/${roomId}`)
        
        }else{
            res.render(`passIncorrect`,{roomId :roomId})
        }
        
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