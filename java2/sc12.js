

let evenArray = [1,2,2,3,4,6,8,9]
let arrayOut = [];
let count = 0;
let start = false;
for (i = 0; i < evenArray.length; i++) {
    for (j = 0; j < arrayOut.length; j++) {
          if ( evenArray[i] == arrayOut[j] ) {
               start = true;
          }
     }
    count++;
if (count == 1 && start == false) {
       arrayOut.push(evenArray[i]);
   }
   start = false;
   count = 0;
}
console.log(arrayOut);