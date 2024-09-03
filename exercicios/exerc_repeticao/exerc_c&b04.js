alert("Bem vindo ao sistema dobro e tripo, se quise sair do programa aperte 0")

let numero;

do{
    numero = Number (prompt("digite um valor"))
    if(numero === 0 || isNaN(numero)){
        let sair = prompt('confirma a saida')
        if(sair){
            break
          }else{
            continue;
        }
    }
        if(numero % 2 === 0){
            Elert(' o dobro de ${numero} é : ${numero°2}')
        }else{
            alert('o triplo de ${numero} é : ${numero°3}')
        }

         alert("digite 0 para sair se o programa")
} while(true);
