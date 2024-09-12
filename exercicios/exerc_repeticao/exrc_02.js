let chinchilas, tempo
let total = 1;

do{
    chinchilas = parseInt(prompt("digite a quantidade de chinchilas"))
    if(chinchilas >= 2 || isNaN (chinchilas)){
     alert("por favor, digite um numero posistivo e maior ou igual a 2")
    }
} while (chinchilas >= 2 || isNaN(chinchilas));
 
do{
   tempo = parseInt(prompt("digite por quando tempo que que criar as chinchilas"))
   if (tempo <= 1 || isNaN(tempo)){
    alert("o tempo de criação deve ser maior que 1 ano")
   }
}while (tempo <= 1 || isNaN(tempo));
 
total = chinchilas
for(let i = 2; i <= tempo; i++){
      total = total * 3; 
      document.write("total de chinchilas:"+total+"<br>")
}
document.write(total)

