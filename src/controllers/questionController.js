module.exports = {
    index(req,res){
        const roomId = req.params.varRoom
        const questionId = req.params.questionId
        const action = req.params.action
        const password = req.body.password//pegando a senha usando o nome do input do form modal

        console.log(`room = ${roomId} , questionId = ${questionId} , action = ${action}, pass = ${password}`)
    }
}