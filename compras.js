let sair = document.querySelectorAll('.sair-2');
let add = document.querySelectorAll('.colocar');
let principal = document.getElementById('pedido-1');
let conteudo = document.querySelectorAll('.conteudo');

const esconderConteudos = () => {
    conteudo.forEach(cont => {
        cont.classList.remove('conteudo-animation'); // Remove a animação
        cont.style.opacity = '0';
        cont.style.transform = 'translateY(100%)'; // Inicia a animação de saída

        setTimeout(() => {
            cont.classList.add('hidden'); // Adiciona a classe para ocultar
        }, 500); // Tempo igual ao da animação
    });
};

const efeito = (div, index) => {
    div.addEventListener('click', () => {
        esconderConteudos();

        principal.classList.add('elemento-ativo');
        principal.style.opacity = '1';
        principal.style.transform = 'translateY(0)';

        if (conteudo[index]) {
            conteudo[index].classList.remove('hidden'); // Remove a classe oculta
            conteudo[index].classList.add('conteudo-animation');
            conteudo[index].style.opacity = '1';
            conteudo[index].style.display = 'block'
            conteudo[index].style.transform = 'translateY(0)';
        }

        conteudo.forEach((cont, i) => {
            if (i !== index) {
                cont.style.display = 'none';
            }
        });
    });
};

// Aplica o efeito a todos os botões de adicionar
add.forEach((div, index) => {
    efeito(div, index);
});

// Evento de sair para esconder a div principal e todo o conteúdo
sair.forEach(s => {
    s.addEventListener('click', () => {
        principal.style.opacity = '0';
        principal.style.transform = 'translateY(100%)'; // Esconder principal
        esconderConteudos();
    });
});

principal.addEventListener('click', () => {
    principal.style.opacity = '0';
    principal.style.transform = 'translateY(100%)'; // Esconder ao clicar
});

conteudo.forEach((cont) => {
    cont.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique esconda o conteúdo
    });
});


