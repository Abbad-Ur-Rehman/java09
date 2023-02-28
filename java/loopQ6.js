






// find the no of digits in a number
/////////////6//////
let number= [1231]
function digits_count(number) {
    let count = 0;
    if (number >= 1) ++count;
  
    while (number / 10 > 1) {
      number /= 10;
      ++count;
    }
  
    return count;
  }

  console.log(digits_count(number))