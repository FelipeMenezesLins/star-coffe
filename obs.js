let inputs = document.querySelectorAll('.obs');
let cont = document.querySelectorAll('.caracteres'); // Corrigido 'doucment' para 'document'

inputs.forEach((input, index) => {
    input.addEventListener('input', function() {
        // Ajusta a altura do textarea conforme o conteúdo
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';

        // Atualiza o contador de caracteres
        let currentLength = this.value.length;
        cont[index].textContent = `${currentLength}/150`; // Exibe o número de caracteres
    });
});
