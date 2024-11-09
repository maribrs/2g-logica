/**
 * 1° percorra um array de 10 caracteres e encotre o numero maior
 */

const vetor = ["5,6,3,2,8,9,4,1,7,2,3"]
let maiornumero = 0
let menornumero = 30

for(let i = 0; i < vetor.length; i++){
     if(vetor[i] > maiornumero){
        maiornumero = vetor[i]
    }  
    if(vetor[i] < menornumero)
        menornumero = vetor [i]
}
console.log(`o maior numero do vetor é ${maiornumero}`)  
console.log(`o menor numero do vetor é ${menornumero}`)  




