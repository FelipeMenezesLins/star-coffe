let cadastro = document.querySelectorAll('.cadastro')
let fechar = document.getElementById('fechar')
let login = document.getElementById('login')
let tela = document.getElementById('from')

login.addEventListener('click', ()=> {
    login.style.display = 'none'
})

fechar.addEventListener('click', ()=> {
    login.style.display = 'none'
})

cadastro.forEach((cadastro)=> {
    cadastro.addEventListener('click', ()=> {
        login.style.display = 'block'
    })
})

tela.addEventListener('click', (tela)=> {
    tela.stopPropagation()
})