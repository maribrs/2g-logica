
let num_op, sexo_op, pecas_op, salario_op
const salario = 1000
let total_folha = 0, total_pecas = 0, media_m = 0, media_f = 0

for (let i = 1; i <= 2; i++) {
}
  do {
    num_op = parseInt(prompt("Digite o código do operario"))
    if(num_op <= 0 || isNaN(num_op)){

    }
  } while (num_op <= 0 || isNaN(num_op));

do {
   sexo_op = prompt("digite m - masculino \n f - feminino").toUpperCase() 
   if (sexo_op !== "M" && sexo_op !== "F") {
       alert("sexo biologico inválido")
   }
} while (sexo_op !== "M" && sexo_op !== "F");

do {
    pecas_po = parseInt(prompt(`digite a quantidade de peças do operario ${num_op}`)) 
  if (pecas_op <= 0 ||isNaN(pecas_op)) {
    alert("codigo inválido")
}  

} while (pecas_op <= 0 || isNaN(pecas_op));

if (pecas_op <= 20) {
     salario_op = salario
} else if (pecas_op > 20 && pecas_op <= 30) {
  salario_op = salario + (pecas_op - 30) * (3 / 100) * salario
} else if(pecas_op > 30){
  salario_op = salario + (pecas_op - 30) * (5 / 100) * salario
  salario + ( (pecas_op - 20) * (3 / 100) * salario )
}

document.write(`<h3>o salario do codigo ${num_op} recebe o salario de R$${salario_op.toFixed(2)}</h3>`)

total_folha = total_folha + salario_op
//document.write(`o total da folha de pagamento ${total_folha}<br>`)
total_pecas += pecas_op
//document.write(`o total de peças: ${total_pecas}<br>`)

if(sexo_op === `m`){
  media_m = media_m + pecas_op
  //document.write(`media da peças M: ${media_m}<br>`)
}else if(sexo_op === "f"){
  media_f = media_f + pecas_op
  //document.write(`media da peças F: ${media_f}<br>`)
}

