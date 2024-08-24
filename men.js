
function toggleMenu() {
    const lupa = document.querySelector('.lupa');
    const menu2 = document.querySelector('div#menu-2');
    const menu = document.querySelector('menu');
    
    if (lupa.style.display === 'none' || lupa.style.display === '') {
        lupa.style.display = 'block';
        setTimeout(() => {
            menu2.style.opacity = '1'; // Animação de fade-in
            menu.style.width = '230px'; // Animação de largura
        }, 10);
    } else {
        menu2.style.opacity = '0';
        menu.style.width = '0';
        setTimeout(() => {
            lupa.style.display = 'none';
        }, 500);
    }
}

// Seleciona todos os spans com a classe .m-1
let spans = document.querySelectorAll('.m-1');

spans.forEach((span) => {
    span.addEventListener('click', () => {
        toggleMenu();  // Chama a função para ativar/desativar o menu e a lupa
    });
});

// Evento de clique na lupa
document.querySelector('.lupa').addEventListener('click', function() {
    toggleMenu();  // Reutiliza a mesma função para a lupa
});


