     //let numero = 2
     //while(numero !== 8){
    //numero = math.floor(math.random() * 10)
    //console.log(numero)
    //}
    
    let i = 1
    while(i <= 10){
        if (i === 5){
            continue; // pula interação, testar mais uma vez a interação
         }
         if( i === 7){
            break; // para axecução
         }
        console.log(i);
        i++;
    }