function somaDeGauss(numeroMaximo) {
    
   var resultado = 0;
   for (var numeroInicial = 1; numeroInicial <= numeroMaximo;  numeroInicial++) {
         resultado += numeroInicial
    } 
   return resultado;
}

console.log(somaDeGauss(100))
