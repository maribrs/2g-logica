let ano
 ano = Number(prompt("coloque o ano"))

 if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        alert('esse ano é bissexto')
 }else{
      alert('esse ano não é bissexto')
 }