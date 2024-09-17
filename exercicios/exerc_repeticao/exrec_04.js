let numero, escolhido, fatotial
do{
    numero = parseInt(prompt("Quantos número você quer saber o fatorial?"))
    if (numero <= 0 || isNaN(numero)){
        alert("numero inválido")     
    }
}while (numero <= 0 || isNaN(numero));
    
//essa estutura vai executa a quantidade de vezes que o usario escolhe
for (let i = 1; i <= numero; i++){
  //document.write(`<P>vezes que a estrutura executou ${i}</p>`)
     do{
        escolhido = parseInt(prompt("Quantos número você quer saber o fatorial?"))
        if (escolhido <= 0 || isNaN(escolhido)){
            alert("numero inválido")     
        }
    }while (escolhido <= 0 || isNaN(escolhido));
      
    fatotial = 1
    for(let j = 1; j <= escolhido; j++){
        fatotial = fatotial * j
        //document.write(`<p>${fatotial}</p>`)
         //  document.write(`${escolhido} x ${j} = ${escolhido*j}<br>`)
        // document.write(`<P>${fatotial}</p>`)
    }
    document.write(`<P> fatorial de ${escolhido} é ${fatotial}</p>`)
}

