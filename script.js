// Função que conta palavras e caracteres
const redacaoArea = document.getElementById('redacao');
const contadorPalavras = document.getElementById('contador-palavras');
const contadorCaracteres = document.getElementById('contador-caracteres');
const tituloInput = document.getElementById('titulo');
const temaSelect = document.getElementById('tema');

// Função para contar palavras e caracteres
function contar() {
    const texto = redacaoArea.value;
    
    // Contagem de palavras (separadas por espaços ou quebras de linha)
    const palavras = texto.trim().split(/\s+/).filter(Boolean);
    contadorPalavras.textContent = palavras.length;
    
    // Contagem de caracteres
    contadorCaracteres.textContent = texto.length;
}

// Função para atualizar o tema
temaSelect.addEventListener('change', function() {
    const temaSelecionado = temaSelect.value;
    if (temaSelecionado) {
        alert(`Tema selecionado: ${temaSelecionado}`);
    }
});

// Adiciona os eventos de input
redacaoArea.addEventListener('input', contar);
tituloInput.addEventListener('input', function() {
    // Apenas atualiza o título no título do documento
    document.title = tituloInput.value ? `${tituloInput.value} - Redação Online` : 'Redação Online';
});
