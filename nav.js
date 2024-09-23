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
      ul.style.display ='none'
    }
  });

  categorias.forEach((categoria) => {
    categoria.addEventListener('click', () => {
        // Certifique-se de que o ul existe
        if (ul) {
            ul.style.display = 'block'
            ul.style.opacity = '1'
            ul.classList.add('apresentar');
        }
    });
});

ul.addEventListener('mouseleave', ()=> {
  ul.classList.remove('apresentar')
  ul.style.opacity = '0'
})