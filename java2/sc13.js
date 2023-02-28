///



const myArray = ['a', 'b',, 'b',, 'b',, 'b',, 'b', 'c','c','c','c','c', 'c', 'b', 'd'];

const elementCounts = {};

myArray.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});

console.log(elementCounts);