let categorias = document.querySelectorAll('.chose')
let ul = document.getElementById('opcao')


window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav-1');
    const content = document.getElementById('principal');
    const showNavAt = content.offsetTop;
  
    if (window.scrollY >= showNavAt) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
      ul.style.display = 'none'
    }
  });

  categorias.forEach((categorias)=> {
    categorias.addEventListener('click', ()=> {
        if(ul.style.display == 'none') {
            ul.style.display = 'block'
        } else {
            ul.style.display = 'none'
        }
    })
})


