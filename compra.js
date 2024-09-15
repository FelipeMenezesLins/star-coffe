/*let sair = document.querySelectorAll('.sair-2')
let compartilhar = document.querySelectorAll('.compartilhar')
let tela = document.querySelectorAll('.tela-cheia')
let add = document.querySelectorAll('.add')
let principal = document.getElementById('pedido-1')
let conteudo = document.querySelectorAll('.conteudo')

let efeito = (div, index)=> {
    div.addEventListener('click', ()=> {
        conteudo[index].style.display = 'block'
        principal.style.display = 'block'
    })
}

add.forEach((div, index)=> {
    efeito(div, index)
})

sair.forEach((sair)=> {
    sair.addEventListener('click', ()=> {
        principal.style.display = 'none'
    })
})*/

let sair = document.querySelectorAll('.sair-2');
let compartilhar = document.querySelectorAll('.compartilhar');
let tela = document.querySelectorAll('.tela-cheia');
let add = document.querySelectorAll('.colocar');
let principal = document.getElementById('pedido-1');
let conteudo = document.querySelectorAll('.conteudo');

let efeito = (div, index) => {
    div.addEventListener('click', () => {
        // Esconder todos os conteúdos antes de mostrar o novo
        conteudo.forEach(cont => cont.style.display = 'none');
        
        // Mostrar o conteúdo correspondente e a div principal
        conteudo[index].style.display = 'block';
        principal.style.display = 'block';
    });
};

// Aplica o efeito de exibição a todos os botões de adicionar
add.forEach((div, index) => {
    efeito(div, index);
});

// Evento de sair para esconder a div principal e todo o conteúdo
sair.forEach(sair => {
    sair.addEventListener('click', () => {
        principal.style.display = 'none';
        conteudo.forEach(cont => cont.style.display = 'none');
    });
});

principal.addEventListener('click', ()=> {
    principal.style.display = 'none'
})

conteudo.forEach((conteudo)=> {
    conteudo.addEventListener('click', (para)=> {
        para.stopPropagation()
    })
})


