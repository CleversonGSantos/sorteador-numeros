function sortear() {
    let quantidadeNumero = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);

    let diferenca = numeroMaximo - numeroInicial + 1;

    if (diferenca < 0) {
        alteraElementoTexto('resultado', `O número inicial deve ser menor ou igual ao número máximo`, 'texto__erro');
        alteraEstadoBotao('btn-reiniciar', true);
        return;
    }

    if (quantidadeNumero > diferenca) {
        alteraElementoTexto('resultado', `A quantidade de números deve ser menor ou igual a ${diferenca}`, 'texto__erro');
        alteraEstadoBotao('btn-reiniciar', true);
        return;
    }


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

    alteraElementoTexto('resultado', `Números sorteados: ${numerosSorteados.join(', ')}`, 'texto__paragrafo');
    alteraEstadoBotao('btn-reiniciar', true);
}   
  

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraElementoTexto(id, texto, css) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto; // Atualiza o conteúdo do elemento
    if (campo.classList.contains('texto__erro')) {
        campo.classList.remove('texto__erro');
    }
    campo.classList.add(css); // Garante que a classe seja mantida
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

function reiniciar() {  
    alteraElementoTexto('resultado', `Números sorteados:  nenhum até agora`, 'texto__paragrafo');
    limpar('quantidade');
    limpar('de');
    limpar('ate');
    alteraEstadoBotao('btn-reiniciar', false);
}

function limpar(id) {
    document.getElementById(id).value = '';
}

function alteraEstadoBotao(id, estado) {
    let botao = document.getElementById(id);
    if (estado) {
        botao.removeAttribute('disabled');
        botao.classList.add('container__botao');
        botao.classList.remove('container__botao-desabilitado');
    } else {
        botao.setAttribute('disabled', 'true');
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}