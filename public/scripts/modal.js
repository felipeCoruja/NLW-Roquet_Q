export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)//adicionando escuta ao botão cancelar e disparando evento close() ao receber um "click"

    function open(){
        modalWrapper.classList.add("active")//selecionando a classe modal-wrapper e adicionando a classe active
    }
    function close(){
        modalWrapper.classList.remove("active")//removendo a classe active da classe modal-wrapper 
    }

    return{
        open,
        close
    }
}