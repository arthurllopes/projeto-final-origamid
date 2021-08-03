import initAnimaNumeros from './anima-numero.js'

export default function initFetchAnimais(){
    
    function criarAnimal(element){
        const div = document.createElement('div')
        div.classList.add('numero-animal')
        div.innerHTML = `<h3>${element.especie}</h3><span data-numero>${element.total}</span>`
        return div
    }
    async function loadAnimais(url){
        try{
            const animaisResponse = await fetch(url)
            const animaisJson = await animaisResponse.json()
            const numerosGrid = document.querySelector('.numeros-grid')
        
            animaisJson.forEach(element => {
                const divAnimal = criarAnimal(element)
                numerosGrid.appendChild(divAnimal)
            });
        
            initAnimaNumeros()
        } catch (erro){
            console.log(Error(erro))
        }
    }
    loadAnimais('../animais.json')
}
