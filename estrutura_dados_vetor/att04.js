/**Faça um programa que preencha dois vetores com dez
 * elementos numéricos cada um e mostre um vetor resultante da intercalação deles.
 * | **vetor1** | 1 | 3 | 5 | 7 |
| **vetor2** | 2 | 4 | 6 | 8 |
| **vetorResultante** | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |*/

let vetor1 = [5,6,4,2,3]
let vetor2 = [1,6,5,4,2]
// vetor = [v1/ - v2/0 - v1/1 - v2/1]

let vetor3 = []
let j = 0
for(let i = 0; i < 5; i++){
    vetor3[j] = vetor1[i]
    j++
    vetor3[j] = vetor2[i]
    j++
}
console.log(vetor3)