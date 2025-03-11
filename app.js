function sortear() {
    let quantidadeNumero = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    for (let i = 0; i < quantidadeNumero; i++) {
        do {
            let numeroSorteado = obterNumeroAleatorio(numeroInicial, numeroMaximo);
            if (!numerosSorteados.includes(numeroSorteado)) {
                numerosSorteados.push(numeroSorteado);
                break;
            }
        } while (true);
    }

    exibirTextoNaTela('resultado', `Números sorteados: ${numerosSorteados.join(', ')}`);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto; // Atualiza o conteúdo do elemento
    campo.classList.add('texto__paragrafo'); // Garante que a classe seja mantida
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}