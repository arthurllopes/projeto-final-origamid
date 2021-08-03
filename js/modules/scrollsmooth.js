export default function initScroll(){
    function scrollSection(event){
        event.preventDefault()
        const target = event.currentTarget.getAttribute('href')
        const section = document.querySelector(target)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    const linkInterno = document.querySelectorAll('[data-tab="menu"] a[href^="#"]')
    linkInterno.forEach((link) =>{
        link.addEventListener('click', scrollSection)
    })
}