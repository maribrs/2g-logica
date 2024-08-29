let velocidade1, velocidade

velocidade = parseFloat(prompt("Digite a velocidade que percorria"))

velocidade1 = parseFloat(prompt("Digite a velocidade permetida"))

if( velocidade <= velocidade1){
      alert('sem multa')
}else if((velocidade > velocidade1) && (velocidade<= (velocidade1*1.2))){
      alert('multa leve')
}else{
       alert('multa grave')
}

