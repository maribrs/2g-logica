let distancialtotal, combustivelgasto
let consumomedio

distancialtotal = parseFloat(prompt("digite a distancia total percorrida pelo automovel"))
consumomedio = parseFloat(prompt("digite a quantidade de combustivel gasto pelo automovel"))
consumomedio = distancialtotal / combustivelgasto
document.write(`o consumo médio do automóvel é de ${consumomedio.toFixed(2)}km/l`)
