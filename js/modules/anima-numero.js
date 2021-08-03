export default function initAnimaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]')
    function animaNumero(){
        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100)
            let start = 0
            const timer = setInterval(() => {
                start += incremento
                numero.innerText = start
                if(start>total){
                    numero.innerText = total
                    clearInterval(timer)
                }
            }, 20);
        })
    }
    let observer;
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')){
            observer.disconnect()
            animaNumero()
        }
    }
    observer = new MutationObserver(handleMutation)
    const observerTarget = document.querySelector('[data-anime="scroll"]')

    observer.observe(observerTarget, {attributes:true})
}