const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')
const page = document.querySelector('html')

//Arrow Function
//buttonOpenModal.onclik = () => modalWrapper.classList.remove('invisible')


buttonOpenModal.addEventListener('click', function(event){
    modalWrapper.classList.remove('invisible')
    console.log('click')
})



document.addEventListener('keydown', function(event){
    const isEscKey = event.keyCode === 27
    console.log('esc')
    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }
})










