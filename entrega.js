let entrega = document.getElementById('entrega')
let retirada = document.getElementById('retirada')
let dive = document.getElementById('entregar')
let divr = document.getElementById('retirou')

entrega.addEventListener('click', ()=> {
    divr.style.display = 'none'
    dive.style.display = 'flex'
    entrega.style.background = '#591202'
    entrega.style.color = 'white'
})

retirada.addEventListener('click', ()=> {
    dive.style.display = 'none'
    divr.style.display='flex'
    if(dive.style.display == 'none') {
        retirada.style.background = '#591202'
        retirada.style.color = 'white'
    } else if(dive.style.display == 'block') {
        retirada.style.background = 'white'
        retirada.style.color = 'black'
    }
})