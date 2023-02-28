




////////ACCENDING ORDER
let numbers = [-12,-444,554,2234,213,576,548,26,34];


for(let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < numbers.length - j; i++) {
        if (numbers[i] > numbers[i + 1]){
            let extra = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = extra;
        }
    }
}

console.log(numbers);


////////DECCENDING ORDER

for(let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < numbers.length - j; i++) {
        if (numbers[i] < numbers[i + 1]){
            let extra = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = extra;
        }
    }
}

console.log(numbers);