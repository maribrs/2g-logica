let salario = 1000
let novosalario, percentual, anoatual

anoatual= Number(prompt("digite o ano atual"))

document.write(`<h3 class="sinicial"> o salario de 2005 é de : ${salario}</h3>`)

percentual = 1.5/100
novosalario = salario + (percentual * salario)

document.write(`<h3 class="s2006"> o salario de 2005 é de : ${salario}</h3>`)

for (let i = 2007; i<= anoatual; i++) {
     percentual = percentual * 2
     novosalario = novosalario + (percentual * novosalario)
     document.write(`<h3 class="s${i}"> o salario de ${i}é de : ${novosalario.toFixed(2)}</h3>`)
}
