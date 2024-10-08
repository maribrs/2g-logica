let contadora, codigocidade, numveiculospasseio, numacidentestransito 

let maionumerocidente, menornum,cidadecommenosacidentes, cidadecommeior,mediveiculospasseio, mediacidentes

let somaveiculos = 0, somacidentesmenos2000veiculos = 0, contadoracidadedemenos2000veiculos = 0 


for(let contadora = 1; contadora<= 5; contadora++){

    do{
        codigocidade = Number(prompt("digite o codigo da cidade"))
        if (codigocidade <= 0 || isNaN(codigocidade)) {
            alert(`codigo: ${codigocidade} invalido`)
        }

    }while(codigocidade <= 0 || isNaN(numveiculospasseio))
    
    do{
        numveiculospasseio = Number(prompt("digite o numero de veiculos do passeio"))
        if(numveiculospasseio <= 0 || isNaN(numveiculospasseio))
        alert(`numero de veiculos de passeio:${numveiculospasseio}invalido`)
    }while (numveiculospasseio <= 0 || isNaN(numveiculospasseio)) {
        
    }
    do{
        numacidentestransito = Number(prompt("digite o numero de acidente de transito"))
        if(numacidentestransito <= 0 || isNaN(numacidentestransito))
        alert(`numero de veiculos de passeio:${numacidentestransito}invalido`)
    }while (numacidentestransito <= 0 || isNaN(numacidentestransito)) {
        
        document.write (`cidade> ${codigocidade}, veiculos:${numveiculospasseio} acidentes:${numacidentestransito}`) 
        
    }
    if (contadora === 1) {
        maionumerocidente = numacidentestransito
        cidadecommeior = codigocidade
        menornum = numacidentestransito
        cidadecommenosacidentes = codigocidade
    }else{
        if (numacidentestransito > maionumerocidente) {
            maionumerocidente = numacidentestransito
            cidadecommenosacidentes = codigocidade
        }
        if(numacidentestransito < menornum){
            menornum = numacidentestransito
            cidadecommeior = codigocidade
            
        }
    }
    somaveiculos = somaveiculos + numveiculospasseio
    if(numveiculospasseio < 200){
       somacidentesmenos2000veiculos += numveiculospasseio
       contadoracidadedemenos2000veiculos++
    }
}
document.write(`<p>cidade com mais acidentes: ${cidadecommeior}, acidentes: ${maionumerocidente} </p>`)

document.write(`<p>cidade com menos acidentes: ${cidadecommeior}, acidentes: ${menornum} </p>`)

mediveiculospasseio = somacidentesmenos2000veiculos / 5
 if(contadoracidadedemenos2000veiculos === 0){
    document.write(`<p>nenhume cidade tem menos de 2000 veiuculos </p>`)
}else{
    mediacidentes = somacidentesmenos2000veiculos / contadoracidadedemenos2000veiculos
    document.write(`<p>media de acidentes nas cidades com menos de 2000 veiculos ${mediacidentes}</p>`)
}
