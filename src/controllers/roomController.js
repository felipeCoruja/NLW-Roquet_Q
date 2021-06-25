const Database = require('../db/config')//importando o banco de dados


module.exports = {
    async create(req,res){

        const db =  await Database()
        const pass = req.body.password//pegando o elemento com o name = "password" dentro da body da pagina que fez a requisição

        let roomId = 0

        for(var i = 0;i<6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString()  //o comando Math.floor(Math.random() * 10) gera um numero randômico entre 0 e 10
            // o comando a cima esta atribuindo um valor randomico a i caso ele seja 0, e caso não seja ele concatena outro valor randômico ao i até gerar um dígito randômico de tamanho 6
            

        }

        await db.run(`INSERT INTO rooms(id,pass) VALUES (${parseInt(roomId)}, ${pass})`)

        await db.close()
        
        res.redirect(`/room/${roomId}`)

    }
}