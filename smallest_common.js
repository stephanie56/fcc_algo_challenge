// Find the smallest common multiple of the provided parameters that
// can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
var r = arr[0] - arr[1];
var range = []; // output [1,2,3,4,5]
var counter = 2;
if(r < 0){
  for(var i = arr[0]; i <= arr[1]; i++){
    range.push(i);
  }
}
else {
  for(var i = arr[1]; i <= arr[0]; i++){
    range.push(i);
  }
}
// assume that 5 is the smallest common
var smallest_common = range[range.length-1];
var base = smallest_common;
var newarr = range.filter(function(number){
   if(smallest_common%number===0){
     return number;
   }
  });
while (newarr.length !== range.length){
 smallest_common = base * counter;
 newarr = range.filter(function(number){
    if(smallest_common%number===0){
      return number;
    }
   });
 counter++;
 }

 console.log(smallest_common);

}


smallestCommons([5,1]);
