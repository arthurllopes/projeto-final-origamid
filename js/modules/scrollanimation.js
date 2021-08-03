export default function initScrollAnimation(){
    const sections = document.querySelectorAll('[data-tab="scroll"]')
    function animarScroll(){
        sections.forEach((section) => {
            const sectionTopDistance = section.getBoundingClientRect().top
            const distance = window.innerHeight * 0.8
            const sectionVisible = sectionTopDistance - distance
            if(sectionVisible < 0){
                section.classList.add('ativo')
            } else if(section.classList.contains('ativo')){
                section.classList.remove('ativo') 
            }
        })
    }
    window.addEventListener('scroll', animarScroll)    

    animarScroll()
}