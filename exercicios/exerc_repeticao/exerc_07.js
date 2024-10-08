//Faça um algoritmo que leia um valor de N inteiro e positivo, calcule e 
//mostre o valor de E, conforme a formula a seguir:
//`E = 1 + 1/1!  +  1/2!  +  1/3! + … + 1/N!`
let fatorial , e = 1, numero
numero = Number(prompt("digite um numero"))
                    
for (let i = 1; i <= numero; i++){

    fatorial = 1
   for(var j = 1; j <= i; j++){
        fatorial = fatorial * j
   }
   document.write(`fatorial ${j}: ${fatorial}<br>`)
    e = e + 1/fatorial
}
document.write(`valor final de E= ${e.toFixed(2)}`)