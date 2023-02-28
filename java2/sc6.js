


////
let arry = [ 1,2,3,14,15,20,40,20]
let odd=0;
let even= 0;
for( let i = 0; i < arry.length; i++){
    if(arry[i] % 2 === 0 ){
        even ++;
    }else{
        odd++;
    }
}
console.log(`The Total Even Numbers are ${even}`);
console.log(`The Total Odd Numbers are ${odd}`);