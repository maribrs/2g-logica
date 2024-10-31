let n
const valor = []
 n = Number(prompt("digite a sequecia de n"))

 for(let i = 0; i < n; i ++){
    vetor[i] = Number(prompt("digite o número para posição: " +i))

 }
 console.log(vetor)
 for(let i = vetor.length - 1; i  >= 0; i-- ){
    console.log(vetor[i])

 }
