let categorias = document.querySelectorAll('.chose')
let ul = document.getElementById('opcao')
console.log(ul)

window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav-1');
    const content = document.getElementById('principal');
    const showNavAt = content.offsetTop;
  
    if (window.scrollY >= showNavAt) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
      ul.classList.remove('apresentar')
    }
  });

  categorias.forEach((categoria) => {
    categoria.addEventListener('click', () => {
        // Certifique-se de que o ul existe
        if (ul) {
            ul.style.opacity = '1'
            ul.classList.add('apresentar');
        }
    });
});

ul.addEventListener('mouseleave', ()=> {
  ul.classList.remove('apresentar')
  ul.style.opacity = '0'
})