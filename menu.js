let seta = document.querySelectorAll('.voltar');
let selecionar = document.querySelectorAll('.lupa');
let procurar = document.querySelectorAll('.procurar');
let carrinho = document.getElementById('carrinho')
let compras = document.getElementById('compras')
let a = document.querySelectorAll('.ancora')


procurar.forEach((procurar)=> {
    procurar.addEventListener('click', () => {
        selecionar[1].style.display = 'block'
    });
}) 
  
carrinho.addEventListener('click', ()=> {
    if(compras.style.display == 'block') {
        compras.style.display = 'none'
    } else {
        compras.style.display = 'block'
    }
})

seta.forEach((seta) => {
    seta.addEventListener('click', () => {
       selecionar.forEach((selecionar)=> {
        selecionar.style.display='none'
       })
    });
});

a.forEach((a)=> {
    a.addEventListener('click', ()=> {
        selecionar[1].style.display = 'none'
    })
})

compras.addEventListener('mouseleave', ()=> {
    compras.style.display = 'none'
})