let count = 1;
function value(a) {
   while(a / 10 >= 1) {
       a /= 10;
       count++;
   }
   console.log(count)
}

value(110)