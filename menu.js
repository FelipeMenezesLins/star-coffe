let seta = document.querySelectorAll('.voltar');
let selecionar = document.querySelectorAll('.lupa');
let span = document.querySelectorAll('.m-1');
let procurar = document.querySelectorAll('.procurar');
let carrinho = document.getElementById('carrinho')
let a = document.querySelectorAll('.ancora')


procurar.forEach((procurar)=> {
    procurar.addEventListener('click', () => {
        selecionar[1].style.display = 'block'
    });
}) 
  
span.forEach((span)=> {
    span.addEventListener('click', ()=> {
        selecionar[0].style.display = 'block'
    })
})


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

a.forEach((a)=> {
    a.addEventListener('click', ()=> {
        selecionar[1].style.display = 'none'
    })
})