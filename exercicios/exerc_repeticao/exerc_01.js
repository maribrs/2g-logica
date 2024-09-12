let numero, contadora = 0

do{
    numero = parseInt(prompt("Digite um número para ser se é primo"))
    if(numero === 0 || isNaN(numero)){
        alert("por favor, digite um positivo e maior que 0")
    }
} while(numero === 0 || isNaN(numero));

console.log("numero digitidado"+numero)
for(let i =1; i < numero; i++){
    if(numero % i === 0){
        contadora++
    }
}
if(contadora === 2){
    console.write(`<h2> o numero ${numero} é um numero primo</h2>`)
}else{
    console.write(`<h2> o numero ${numero} não é um numero primo</h2>`)
}
  