


// let arry=['Ali','Rehman','Hamza','Burhan',12, true]

// for (let i = 0; i < arry.length; i++) {
//     console.log(arry[i]);
    
// }



///////////////////////////////////////
// let numbers=[12,12,34,9,-59,654,-1,-28]

// for(let i=0 ; i < numbers.length; i++){
//     if (numbers[i]<0){
//         console.log(`This is Negative number ${numbers[i]}`);
//     }
// }


//////////////////////////////////////////
// let numbers=[12,12,34,9,59,654,1,28]

// function sum(numbers){
//     let sum =0;
//     for(let i = 0; i< numbers.length; i++)
//     sum+= numbers[i];
//     return sum;
// }

// console.log(sum(numbers))


//////////////////////////////////////
let digits =[12,24,12,4,4,22,124,4,12,2312,10900,234];
let max = digits[0];
for ( i =0 ; i < digits.length; i++){
    if (digits[i] >= max){
        max = digits[i]
        

    }
}
console.log(max)


let digits1 =[12,24,12,4,4,22,124,4,12,2312,10900,234];
let min = digits1[0];
for ( i =0 ; i < digits1.length; i++){
    if (digits1[i] <= min){
        min = digits1[i]
        

    }
}
console.log(min)