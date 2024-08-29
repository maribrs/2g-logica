//1° definir os dados de entrada (variàveis)
let numero1, numero2
let soma, sub, mult, div

numero1 = parseFloat(prompt("digite um valor por favor."))
numero2 = parseFloat(prompt("digite outro valor por favor."))

//2° processamento (logica| resolver o algoritimo)

soma = numero1 + numero2
sub = numero1 - numero2
mult = numero1 * numero2
div = numero1 / numero2

//3° sainda de dados (resultado do processamento)

document.write(`a soma de ${numero1} + ${numero2} = ${soma}<br>`)
document.write(`a sulbtração de ${numero1} - ${numero2} = ${sub}<br>`)
document.write(`a multiplicação de ${numero1} x ${numero2} = ${mult}<br>`)
document.write(`a divisão de ${numero1} / ${numero2} = ${div}<br>`)

