function findElement(arr, func) {
  var result = arr.filter(func);
  if(result.length === 0){
    return undefined;
  }
  else{
    return result[0];
  }
}

findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; });
