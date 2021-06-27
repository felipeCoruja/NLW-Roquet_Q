const Database = require('../db/config')//importando o banco de dados


module.exports = {
    async create(req,res){

        const db =  await Database()
        const pass = req.body.password//pegando o elemento com o name = "password" dentro da body da pagina que fez a requisição

        let isRoom = true;
        let roomId = 0
        
        while(isRoom){
            
            for(var i = 0;i<6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString()  //o comando Math.floor(Math.random() * 10) gera um numero randômico entre 0 e 10
                // o comando a cima esta atribuindo um valor randomico a i caso ele seja 0, e caso não seja ele concatena outro valor randômico ao i até gerar um dígito randômico de tamanho 6
            }

            // VERIFICA SE O NOMERO GERADO JÁ FOI CADASTRADO
            const roomsExistIds = await db.all(`SELECT id  FROM rooms`)//buscando no banco todos os id do banco e colocando em um array roomsExistIds
    
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)//array roomsExistIds usando a função some() que percorre todo o array verificando se a condição é verdadeira, caso for ele para de percorrer e retorna true
            
            // INSERI NO BANCO DE DADOS
            if(! isRoom){
    
                await db.run(`INSERT INTO rooms(id,pass) VALUES (${parseInt(roomId)}, ${pass})`)
    
            } 
        }
 
      




        await db.close()
        
        res.redirect(`/room/${roomId}`)

    },


    async open(req,res){
        const db = await Database()
        const roomId = req.params.room// pegando o :room que veio na URL
        const questions = await db.all(`SELECT * FROM question WHERE room =${roomId} AND read = 0`)
        const questionsRead = await db.all(`SELECT * FROM question WHERE room =${roomId} AND read = 1`)
        let isNoQuestions 

        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render("room",{roomId: roomId,questions : questions,questionsRead : questionsRead, isNoQuestions : isNoQuestions})//renderizando roo
    },

    enter(req,res){
        const roomId = req.body.roomId
        res.redirect(`room/${roomId}`)
    }
}