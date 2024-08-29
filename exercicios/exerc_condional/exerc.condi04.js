let n1, n2, n3
let media

n1 = parseFloat(prompt("Digite a sua primeira nota por favor"))
n2 = parseFloat(prompt("Digite a sua segunda nota por favor"))
n3 = parseFloat(prompt("Digite a sua terceira nota por favor"))

if (((n1 && n2 && n3) >= 1) && ((n1 && n2 && n3) <= 10)) {
    media = (n1 + n2 + n3) / 3

    if (media >= 7) {
        alert('aprovado')
    } else {
        alert('reprovado')
    }
} else {
    alert('tá errado aqui parceiro')
}





