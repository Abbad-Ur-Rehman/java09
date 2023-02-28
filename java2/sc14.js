






let element = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(element) {
return element.filter((item, 
index) => element.indexOf(item) === index);
}
console.log( removeDuplicates(element))