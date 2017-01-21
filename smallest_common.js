// Find the smallest common multiple of the provided parameters that
// can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
var smallest_common = 0;
var counter = 1;
var numbers = [];
for(var i = arr[0]; i <= arr[1]; i++)
  {
    numbers.push(i);
  }

smallest_common = arr[1] * counter;
var index = numbers.length;

while(){
 for(var i = 0; i < index - 1; i++){
   if(smallest_common%numbers[index] == 0 && index >= 0){
     index--;
   }
   else{
     break;
   }
 }

}






  //console.log(numbers);
}


smallestCommons([1,5]);

// numbers.forEach(function(n){
//   if(smallest_common%n === 0){
//     console.log('yes');
//     return true;
//   }
//   else{
//     console.log("no");
//     return false;
//   }
// });
