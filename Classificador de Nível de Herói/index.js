// criando função com retorno e parâmetros
function somaRank(vitoriasRank, derrotasRank) {
  let resultadoSoma = vitoriasRank - derrotasRank;
  return resultadoSoma;
}
// criando variáveis e dando valor de uma função para uma variável
let saldoVitorias = somaRank(107, 9);
let rankAtual = "Sem Rank";

// laço de repetição com estrutura de decisões e operadores
do {
  if (saldoVitorias <= 10) {
    rankAtual = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    rankAtual = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    rankAtual = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    rankAtual = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    rankAtual = "Prata";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    rankAtual = "Ouro";
  } else if (saldoVitorias >= 101) {
    rankAtual = "Imortal";
  }
} while (rankAtual === "Sem Rank");

// saída solicitada no desafio
console.log(
  `O Herói tem saldo de ${saldoVitorias} e está no nível de ${rankAtual}`
);