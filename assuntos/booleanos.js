let isAtiva = false 
console.log(isAtiva)

isAtiva = true
console.log(!isAtiva)
console.log("OS VERDADEIROS....")
console.log(!!1)
console.log(!!-3)
console.log(!!" ")// contem espaço em branco
console.log(!!{})
console.log(!! Infinity)
console.log(!!(isAtiva))

console.log("OS FALSOS...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtiva = false))