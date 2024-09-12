let num, numperfeito = 0

do {
    num = parseInt(prompt("digite um numero paara saber se é numero um numero perfeito"))
    if (num === 0 || isNaN(num)) {
        alert("digite um numero positivo e maior que 0")
    }
} while (num === 0 || isNaN(num));

debugger;
for(let i = 1; i < num; i++){
  if(num % i === 0){
    numperfeito = numperfeito + i
  }
}
if (num === numperfeito){
    document.write(`numero ${num} é um numero perfeito `)
}else{
    document.write(`numero ${num} não é um numero perfeito `)
}
