/* Escreva um algoritmo que solicite ao usuário a entrada de 5 números,
e que exiba o somatório desses números na tela. Após exibir a soma,
o programa deve mostrar também os números que o usuário digitou, um por linha. */

let vetor = []
let somarvaloresvetor
for(let i = 0; i < 5; i++){
    vetor[i] = Number(prompt("digite um valor"))
    somarvaloresvetor = somarvaloresvetor + vetor[i]
}
document.write(`<h3>${vetor}</h3>`)
document.write(`<h4>a soma dos valores ${somarvaloresvetor}`)