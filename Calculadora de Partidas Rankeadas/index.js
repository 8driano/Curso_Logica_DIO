// variáveis declaradas
let nomeDoPersonagem = "Tempest"
let xpDoPersonagem = 100000
let nivelDoPersonagem = "0"

// estrutura de repetição
do
  // estrutura de decisão + utilização de operadores
  if (xpDoPersonagem >= 0 && xpDoPersonagem <= 1000) {
    nivelDoPersonagem = "Ferro"
  } else if (xpDoPersonagem >= 1001 && xpDoPersonagem <= 2000) {
    nivelDoPersonagem = "Bronze"
  } else if (xpDoPersonagem >= 2001 && xpDoPersonagem <= 5000) {
    nivelDoPersonagem = "Prata"
  } else if (xpDoPersonagem >= 5001 && xpDoPersonagem <= 7000) {
    nivelDoPersonagem = "Ouro"
  } else if (xpDoPersonagem >= 7001 && xpDoPersonagem <= 8000) {
    nivelDoPersonagem = "Platina"
  } else if (xpDoPersonagem >= 8001 && xpDoPersonagem <= 9000) {
    nivelDoPersonagem = "Ascendente"
  } else if (xpDoPersonagem >= 9001 && xpDoPersonagem <= 10000) {
    nivelDoPersonagem = "Imortal"
  } else if (xpDoPersonagem >= 10001) {
    nivelDoPersonagem = "Radiante"

    // condição para o fim da estrutura de repetição
  } while (nivelDoPersonagem === "0")

// mensagem ao usuário com as informações solicitadas.
console.log(
  "O Herói de nome " + nomeDoPersonagem + " está no nível de " + nivelDoPersonagem)