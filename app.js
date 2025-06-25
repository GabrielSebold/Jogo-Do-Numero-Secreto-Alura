let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let cont = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = cont > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Voce descobriu o número com ${cont} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('h1', 'Quase!');
            exibirTextoNaTela('p', `O número secreto é maior que o número ${chute}`);
        } else {
            exibirTextoNaTela('h1', 'Quase!');
            exibirTextoNaTela('p', `O número secreto é menor que o número ${chute}`);
        }
        limparCampo();
    }
    cont ++;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        console.log(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo () {
    let chute = document.querySelector('input');
    chute.value = '';   
}

function resetGame () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    cont = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}