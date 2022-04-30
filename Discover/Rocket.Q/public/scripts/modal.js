// controle de abri e fechar a modal

export default function Modal(){
    
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.cancel')

    cancelButton.addEventListener("click", close)

    //Abre a modal 
    function open(){
        modalWrapper.classList.add("active")
    }

    //Fecha a modal 
    function close(){
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
}}
