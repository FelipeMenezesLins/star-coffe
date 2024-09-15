
let menos = document.querySelectorAll('.tirar');
let soma = document.querySelectorAll('.evento');
let quantidade = document.querySelectorAll('.ir-carrinho');
let adicionar = document.querySelectorAll('.adicionar');
let checkboxesAdicionais = document.querySelectorAll('.box'); // Ajustado para a classe correta

soma.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let num = parseInt(quantidade[index].textContent);
        quantidade[index].textContent = ++num;
        valormais(index); // Ajustado para passar o índice
        btns(index)
    });
    btns(index)
});

menos.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let num = parseInt(quantidade[index].textContent);
        if (num > 1) {
            quantidade[index].textContent = --num;
            valormais(index); // Ajustado para passar o índice
        }
        btns(index)
    });
    btns(index)
});

function calcularAdicionais() {
    let totalAdicionais = 0;
    checkboxesAdicionais.forEach(checkbox => {
        if (checkbox.checked) {
            totalAdicionais += parseFloat(checkbox.dataset.preco);
        }
    });
    return totalAdicionais;
}

function valormais(index) {
    // Obtém a quantidade a partir do item no índice fornecido
    let num = parseInt(quantidade[index].textContent);

    // Obtém o valor a partir do item no índice fornecido
    let addi = parseFloat(adicionar[index].textContent.replace('Adicionar', '').replace(',', '.'));

    // Inicializa o total como 0
    let total = 0;

    // Chama a função calcular e armazena o valor retornado
    let caixa = calcularAdicionais(); // Vai pegar o valor do item selecionado (checkbox)

    // Obtém o valor do dataset e converte para float
    let valor = parseFloat(adicionar[index].dataset.preco);

    // Calcula o total multiplicando o valor pelo número de itens e adicionando o valor dos checkboxes
    total = num * (valor + caixa);

    // Atualiza o texto do item no índice fornecido com o total
    adicionar[index].textContent = `Adicionar R$${total.toFixed(2).replace('.', ',')}`;
}

function valormenos(index) {
    // Obtém a quantidade a partir do item no índice fornecido
    let num = parseInt(quantidade[index].textContent);

    // Obtém o valor a partir do item no índice fornecido
    let addi = parseFloat(adicionar[index].textContent.replace('Adicionar', '').replace(',', '.'));

    // Inicializa o total como 0
    let total = 0;

    // Obtém o valor do dataset e converte para float
    let valor = parseFloat(adicionar[index].dataset.preco);

    // Calcula o total multiplicando o valor pelo número de itens e subtraindo o valor dos checkboxes
    total = num * valor;

    // Atualiza o texto do item no índice fornecido com o total
    adicionar[index].textContent = `Adicionar R$${total.toFixed(2).replace('.', ',')}`;
}

// Adiciona o listener para os checkboxes adicionais
checkboxesAdicionais.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        // Atualiza o valor para todos os itens
        soma.forEach((_, idx) => {
            valormais(idx);
        });
    });
});

// Função para ajustar o estilo do botão de decrementar com base na quantidade
function btns(index) {
    let quantidadeAtual = parseInt(quantidade[index].textContent) || 0; // Converte para número e garante que não seja NaN
    if (quantidadeAtual <= 1) {
        menos[index].style.background = 'gray';
    } else {
        menos[index].style.background = '#591202';
    }
}
