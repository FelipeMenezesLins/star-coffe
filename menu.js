let seta = document.querySelectorAll('.voltar');
let selecionar = document.querySelectorAll('.lupa');
let span = document.getElementById('m-1');
let procurar = document.getElementById('procurar');
let carrinho = document.getElementById('carrinho')


procurar.addEventListener('click', () => {
    selecionar[1].style.display = 'block'
});

span.addEventListener('click', () => {
    selecionar[0].style.display = 'block'
});

carrinho.addEventListener('click', ()=> {
    selecionar[2].style.display = 'block'
})

seta.forEach((seta) => {
    seta.addEventListener('click', () => {
       selecionar.forEach((selecionar)=> {
        selecionar.style.display='none'
       })
    });
});
