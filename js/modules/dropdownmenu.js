export default function initDropDownMenu(){
    // Selecionou onde vai ser clicado
    const menuHolder = document.querySelector('[data-dropdown]')

    // Diferente tipos de eventos para a mesma função (click ou touch)
    const eventos = ['click', 'touchstart']

    
    
    // Essa função vai adicionar 'ativo' e executar uma outra função
    function handleClick(event){
        event.preventDefault()
        this.classList.toggle('ativo') // this é o elemento que foi atribuido o evento junto a função.
    }
    // Adicionou uma função ao click ou touch
    eventos.forEach((evento) => {
        menuHolder.addEventListener(evento, handleClick)
    })
    
    // O bloco da função esta aqui pegando os argumentos em ordem.
    function outsideClick(element, events, callback){
        
        // Esse evento vai ativar essa função aqui.
        // Se o evento onde foi clicado (event.target) NÃO estiver contido no element (this(argumento passado)), vai executar uma função de callback (esta função foi passada como argumento e vai ser executada)
        function handleOutside (event){
            if(!element.contains(event.target)){
                callback()
            }
        }
        // Adicionou um evento ao clique do html
        const html = document.documentElement
        events.forEach(evento => {
            html.addEventListener(evento, handleOutside)
        })
        
    }
    
    // Essa função vai ser executada passando alguns argumentos. Que função é essa?
    outsideClick(this, eventos, () => {
        menuHolder.classList.remove('ativo')
    })

}