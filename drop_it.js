function dropElements(arr, func) {
  var newarr = arr.filter(func);
  if (newarr.length != 0){
    var index = arr.indexOf(newarr[0]);
    return arr.slice(index);
  }
  else{
    return newarr;
  }
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
