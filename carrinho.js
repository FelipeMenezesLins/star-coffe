document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
    let ul = document.getElementById('lista');
    let cont = document.getElementById('cart-cont');
    let subtotalElem = document.getElementById('subtotal-valor');  // Renomeado para evitar conflito de nomes
    let total = document.getElementById('total-valor');
    let adicionar = document.querySelectorAll('.adicionar');
    let p = document.getElementById('nada');
    let pc = document.querySelectorAll('.ir-carrinho')[0];
    let conteudo = document.querySelectorAll('.container');
    let principal = document.getElementById('pedido-1');

    let subtotal = 0;  // Variável para armazenar o subtotal

    adicionar.forEach((add, index) => {
        add.addEventListener('click', () => {
            let quantidade = parseInt(cont.textContent) || 0;
            quantidade += 1;
            cont.textContent = quantidade;

            // Obtém o valor do item
            let valor = parseFloat(add.textContent.replace('Adicionar', '').replace('R$', '').replace(',', '.'));
            p.innerHTML = ''; 

            // Atualiza o carrinho
            let nomeItem = add.getAttribute('data-name');
            let nomeLimitado = nomeItem.length > 10 ? nomeItem.substring(0, 8) + "..." : nomeItem;
            let item = `${nomeLimitado} R$${valor.toFixed(2)}`;

            cart.push(item);
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = item;

            // Cria o botão de editar (lápis)
            let lapis = document.createElement('span');
            lapis.innerHTML = 'edit';
            lapis.classList.add('material-symbols-outlined');
            lapis.style.color = '#591202';
            lapis.style.cursor = 'pointer';

            // Cria o botão de remover (circulo)
            let span = document.createElement('span');
            span.innerHTML = 'do_not_disturb_on';
            span.style.color = 'gray';
            span.style.cursor = 'pointer';
            span.classList.add('material-symbols-outlined');
            li.appendChild(lapis);
            li.appendChild(span);

            // Evento para remover o item do carrinho
            span.addEventListener('click', function() {
                let quantidade = parseInt(cont.textContent) || 0;
                li.style.display = 'none';
                quantidade -= 1;
                cont.textContent = quantidade;

                // Atualiza o subtotal removendo o valor do item
                subtotal -= valor;
                subtotalElem.textContent = `R$${subtotal.toFixed(2)}`;

                if (quantidade == 0) {
                    p.innerHTML = 'Nenhuma compra';
                }
            });

            // Evento para editar o item (lápis)
            lapis.addEventListener('click', () => {
                principal.classList.add('elemento-ativo');
                principal.style.opacity = '1';
                principal.style.transform = 'translateY(0)';
                if (conteudo[index]) {
                    conteudo[index].classList.remove('hidden');
                    conteudo[index].classList.add('conteudo-animation');
                    conteudo[index].style.opacity = '1';
                    conteudo[index].style.display = 'block';
                    conteudo[index].style.transform = 'translateY(0)';
                } 
            });

            // Atualiza o subtotal ao adicionar o item
            subtotal += valor;
            subtotalElem.textContent = `R$${subtotal.toFixed(2)}`;
        });
    });
});
