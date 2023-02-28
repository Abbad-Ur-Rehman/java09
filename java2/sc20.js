var n = [10,20,21,4,5,6,7,99,0,12,13];
//var n = [10,20,0,12];
n.sort(function(a,b){
 if (a % 2 !=b % 2 ){
   return a%2;
  }else {
    return a - b; 
  }
});