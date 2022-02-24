let value = [1, 2, 3]
var maior = 0;
for (var i = 0; i < value.length; i++) {
   if ( value[i] > maior ) {
      maior = value[i];
   }
}

console.log(maior + ' É o maior')