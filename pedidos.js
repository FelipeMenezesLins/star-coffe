let entregaButtons = document.querySelectorAll('.entrega');
let retiradaButtons = document.querySelectorAll('.retirada');
let dive = document.getElementById('entregar');
let divr = document.getElementById('retirou');
let fecha = document.getElementById('fecha')
let lupa = document.querySelectorAll('.lupa');
let sub = document.querySelectorAll('.subs');


// Log para verificar a quantidade de elementos
entregaButtons.forEach((entregaBtn) => {
    entregaBtn.addEventListener('click', () => {
        dive.style.display = 'flex';
        divr.style.display = 'none';
         sub[1].style.display = 'none'
         sub[0].style.display = 'block'

        entregaButtons.forEach((btn) => {
            btn.style.background = '#591202';
            btn.style.color = 'white';
        });

        retiradaButtons.forEach((btn) => {
            btn.style.background = 'white';
            btn.style.color = 'black';
        });
    });
});

retiradaButtons.forEach((retiradaBtn) => {
    retiradaBtn.addEventListener('click', () => {
        divr.style.display = 'flex';
        dive.style.display = 'none';
        sub[0].style.display = 'none'
        sub[1].style.display = 'block'

        retiradaButtons.forEach((btn) => {
            btn.style.background = '#591202';
            btn.style.color = 'white';
        });

        entregaButtons.forEach((btn) => {
            btn.style.background = 'white';
            btn.style.color = 'black';
        });
    });
});

dive.addEventListener('click', () => {
    if (lupa[3] && sub[0]) {
        lupa[3].style.display = 'block';
        sub[0].style.display = 'block';
    }
});

divr.addEventListener('click', () => {
    if (lupa[3] && sub[1]) {
        lupa[3].style.display = 'block';
        sub[1].style.display = 'block';
    }
});


fecha.addEventListener('click', ()=> {
    lupa[3].style.display = 'none'
})