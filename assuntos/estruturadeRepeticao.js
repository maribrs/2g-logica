//validações -> garantir que meu sistema funcione
//isNaN -> PERGUNTA SE É NÚMERO
//"" -> verifica se esta vazio

//do{
//  numero1 = parseFloat(prompt("digite um numero"));
//  if(isNaN(numero1)){
//    alert("numero invalido")
//}
//}while(isNaN(numero1))

do{
    numero1 = parseFloat(prompt("digite um numero"));
}while(isNaN(numero1))

do{
    numero2 = parseFloat(prompt("digite 2 numero"));
    
}while(isNaN(numero2))
if(isNaN(numero2)){
    alert('numero digitado ${numero2} é invalido');
}
alert(' a soma ${numero1+numero2}')

//let i = 0
// i = parseFloat(prompt("digite um numero"))
//for (i = 0; i < 10; i++){
    //console.log('${i}')
//}

//lrt numrtos = 0
//let i = 0
//while(1 < 5) {
// numero = numero + i + '\t'
// i++
//}