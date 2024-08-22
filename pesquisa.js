let pesquisa = document.getElementById('pesquisa')
let item = document.querySelectorAll('.ancora')

pesquisa.addEventListener('input', ()=> {
    let pes = pesquisa.value.toLowerCase()
    item.forEach((item)=> {
        let text = item.textContent.toLowerCase()
        if(text.includes(pes)) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
})