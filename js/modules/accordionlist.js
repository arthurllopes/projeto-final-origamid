export default function initAccordion() {
  const accordionList = document.querySelectorAll('.faq-lista dt');
    function open() {
    this.nextElementSibling.classList.toggle('ativo');
    }
    accordionList.forEach((item) => {
        item.addEventListener('click', open);
    });
}
