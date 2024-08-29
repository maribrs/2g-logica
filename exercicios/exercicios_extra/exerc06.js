let A, B, c

A = Number(prompt("digite o valor A"))
B = Number(prompt("digite o valor B"))

c = A
A = B
B = c

document.write(`o valor de A é ${A} <br>`)
document.write(`o valor de B é ${B}`)

