import Modal from './modal.js' // importando modulo da função Modal() do arquivo modal.js

const modal = Modal() // criando uma constante que recebe a função Modal()

const modalTitle = document.querySelector('.modal h2')// pegando o titulo <h2> da modal
const modalDescription = document.querySelector('.modal p')//pegando a descrição <p> da modal
const modalButton = document.querySelector('.modal button')//pegando o botão <button> da modal



//**************** */ SCRIPT DA FUNÇÃO MARCAR COMO LIDO*****************

// Pegando os botões que possuem a classe check

const checkButtons = document.querySelectorAll(".actions a.check") //Selecionando todos os botões da classe check que estão dentro de uma tag <a> e dentro da classe actions

checkButtons.forEach(button =>{//Percorrendo todo o chekButtons  com forEach, e adicionando um eventListener em cada botao e por fim guardando na variável button

    button.addEventListener("click", handleClick)//colocando uma escuta no botão para saber quando ele for clicado e chamando a função handleClick que abre e muda a modal de acordo com o botão clicado
})


//************** SCRIPT DA FUNÇÃO EXCLUIR MENSAGEM ************************ */

const deleteButton = document.querySelectorAll(".actions a.delete")//Selecionando todos os elementos com a classe delete dentro da tag <a> dentro da classe actions

deleteButton.forEach(button =>{//percorrendo todos os elementos de deleteButtons com forEach, adicionando um eventListener em um botão e passando um evento modal.open() ao ser clicado
    button.addEventListener("click" , (event) => handleClick(event,false))
})


//muda o conteudo da modal de acordo com a variável check
// true para marcar como lida e
//false para excluir 
function handleClick(event, check = true){
    event.preventDefault()// serve para a tag <a> não colocar o # na URL quando clicado
    
    const slug = check ? "check" : "delete" //um dos parâmetro do form da modal
    const roomId = document.querySelector("#room-id").dataset.id//pegando o id da sala 
    const form = document.querySelector(".modal form")//pegando o elemento <form>
    const questionId = event.target.dataset.id//pegando o elemento data-id dentro da tag <a> que está dentro de event
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)//setando o atributo do elemento <form>
    

    const text= check ? "Marcar como lida" : "Excluir"//se check for true : se check for false
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()

}

