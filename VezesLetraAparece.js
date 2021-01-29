function vezesLetraAparece(frase, letra) {
  
   
    var conta =  0
    for (var contador = 0; contador<frase.length; contador ++){
        
        if (frase[contador] == letra){
            conta ++
        }
        
    } 
    return conta
}
console.log(vezesLetraAparece("marcos davi vasconcelos de carvalho", "a"));