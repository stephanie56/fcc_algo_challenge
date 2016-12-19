/* Sorted Union */
// Write a function that takes two or more arrays
// and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
  var newArr = Array.from(arguments);
  var array = newArr.reduce(function(a,b){
    return a.concat(b);
  },[]);

 var result = array.filter(function(elm, pos){
   return array.indexOf(elm) == pos;
 });
 return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
