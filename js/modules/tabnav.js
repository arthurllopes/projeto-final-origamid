export default function initTab(){
    const animalImages = document.querySelectorAll('[data-tab="lista"] img')
    const animalDescription = document.querySelectorAll('[data-tab="content"] section')
    function show(index){
        animalDescription.forEach((section) => {
            section.classList.remove('ativo')
        })
        animalDescription[index].classList.add('ativo')
    }  
    animalImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            show(index)
        })
    })
}