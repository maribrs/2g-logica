/**2° percorra um array de 10 caracteres e verifique se existe o numero 5 e se existir mostre sua posição  */

let vetor = ["5,6,3,2,8,9,4,1,7,2,3"]
// encontrar o numero 5 e mostrar o seu indice
vetor =  ["4,6,3,2,8,9,5,1,7,2,3"]
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] === 5){
        console.log(`numero encontrado ${vetor[i]} e sua possição é ${i}º`)
    }
}