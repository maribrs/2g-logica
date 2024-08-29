let valordolar, valoreal, resultado

valoreal = parseFloat(prompt("digite o valor real"))
valordolar = parseFloat(prompt("digite o valor da cotação do dolar"))

resultado = valoreal / valordolar


document.write(`R${valoreal} convertido  para o dolar é:${resultado}`)

