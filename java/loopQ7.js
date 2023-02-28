




let numb = 448;
let sum = 0;
while(numb > 0) {
    let rem = numb % 10;
    sum = sum + rem;
    numb = parseInt(numb / 10);
}
console.log(sum);
