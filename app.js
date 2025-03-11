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

    alert(`Números sorteados: ${numerosSorteados.join(', ')}`);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}