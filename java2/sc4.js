let digits =[12,24,12,4,4,22,124,4,12,2312,10900,234];
let max = digits[0];
for ( i =0 ; i < digits.length; i++){
    if (digits[i] >= max){
        max = digits[i]
        

    }
}
console.log(`MAXIMUM VALUE IS = ${max}`)


let digits1 =[12,24,12,4,4,22,124,4,12,2312,10900,234];
let min = digits1[0];
for ( i =0 ; i < digits1.length; i++){
    if (digits1[i] <= min){
        min = digits1[i]
        

    }
}
console.log(  `MINIMUM VALUE IS = ${min}`)



