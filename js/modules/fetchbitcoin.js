export default function initFetchBitcoin(){

    fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then(body => {
        const btc = document.querySelector('.btc')
        btc.innerText = (1000 / body.BRL.sell).toFixed(4)
    })
    .catch(erro => {
        console.log(Error(erro))
    })

}