alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// - comentar código - if = Se chute for igual número secreto / else = se for outra coisa

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}

// Crtl + Shift + X = acessa barra de extensões
