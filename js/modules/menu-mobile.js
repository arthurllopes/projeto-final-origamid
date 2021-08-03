export default function initMenuMobile(){
    const menuMobile = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const eventos = ['click', 'touchstart']

    
    function openMenu(){
        this.classList.toggle('ativo')
        menuList.classList.toggle('ativo')
        
        function clickOutside(element, alvo, eventosAcontecem, callback){
            function closeMenu(event){
                if(!element.contains(event.target) && event.target !== alvo){
                    callback()
                }
            }
            const html = document.documentElement
            eventosAcontecem.forEach(evento => html.addEventListener(evento, closeMenu))
            
        }
        clickOutside(menuList, this, eventos,() => {
            menuList.classList.remove('ativo')
        })
    }
    eventos.forEach(evento => menuMobile.addEventListener(evento, openMenu))
}
