


///
let evenOdds= [1,2,3,4,5,6,7,8,9,10,12,15,23,43,15,16]
let storeEven =[];
let storeOdds =[];
for( let i = 0; i < evenOdds.length; i++){
    if(evenOdds[i] % 2 === 0){
        storeEven.push(evenOdds[i])
    }
}
for( let i = 0; i < evenOdds.length; i++){
    if(evenOdds[i] % 2 !== 0){
        storeOdds.push(evenOdds[i])
    }
}
console.log( `This is Even Numbers ${storeEven}`)
console.log(`This is Odd Numbers ${storeOdds}`)
