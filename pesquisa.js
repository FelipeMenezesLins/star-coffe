let pesquisa = document.querySelectorAll('.pesquisa')
let item = document.querySelectorAll('.ancora')
let nao = document.getElementById('naoacho')

pesquisa.forEach((pesquisa)=> {
    pesquisa.addEventListener('input', ()=> {
        let pes = pesquisa.value.toLowerCase()
        let encontrou = false
        item.forEach((item)=> {
            let text = item.textContent.toLowerCase()
            if(text.includes(pes)) {
                item.style.display = ''
                encontrou = true
            } else {
                item.style.display = 'none'
            }
        })
        if(!encontrou) {
            nao.style.display = 'block'
        } else {
            nao.style.display = 'none'
        }
    })
}) 

