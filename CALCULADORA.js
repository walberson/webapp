
function calculadora(var1 , var2, operacao) {
    var resultado

    if (operacao === "+") {
        resultado = var1 + var2;
    } else if (operacao === "-") {
        resultado = var1 - var2;
    } else if (operacao === "*") {
        resultado = var1 * var2;
    } else if (operacao === "/"){
        resultado = var1 / var2;
    } else {
        resultado = "Sinal não encontrado"
    }
    return resultado
}
console.log (calculadora(5,5,"+"));