////////////////////////////////////////
let numbers=[12,12,34,9,59,654,1,28]

function sum(numbers){
    let sum =0;
    for(let i = 0; i< numbers.length; i++)
    sum+= numbers[i];
    return sum;
}

console.log(sum(numbers))