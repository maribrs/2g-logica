let horaB, horaF

horaB = parseFloat(prompt("digite o horario do brasil"))

horaF = horaB + 5
 
if(horaF >= 24){
    horaF -= 24
   document.write(`o horario na frança é 0${horaF}:00 hrs`)
} else {
    document.write(`o horario na frança é ${horaF}:00`)
}
