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
var base = range[range.length-1];
var smallest_common = base;
for(var i = 0; i < range.length; i++){
  while(smallest_common%range[i] !== 0){
    smallest_common = base * counter;
    counter++;
    console.log("step " + i + " and the current number " + smallest_common);
  }
  console.log("step " + i + " and the smallest common is " +smallest_common);
}

console.log(smallest_common);

}


smallestCommons([5,1]);
