export default function initModal(){
    const openButton = document.querySelector('[data-modal="open"]')
    const closeButton = document.querySelector('[data-modal="close"]')
    const containerModal = document.querySelector('[data-modal="container"]')

    function openModal(){
        containerModal.classList.add('ativo')
    }
    function closeModal(){
        containerModal.classList.remove('ativo')
    }
    function clickOutside(event){
        const { target } = event
        if(target === this)
        closeModal()
    }

    openButton.addEventListener('click', openModal)
    closeButton.addEventListener('click', closeModal)
    containerModal.addEventListener('click', clickOutside)
}