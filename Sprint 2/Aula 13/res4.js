let sexo = 'M';
let hight = 1.60;
let indice;

if(sexo = 'M') {
    indice =  (72.7 * hight) - 58;
} else {
    indice =  (62.1 * hight) - 44.7;
}

                   //Limita as casas decimais
console.log(indice.toFixed(2))
