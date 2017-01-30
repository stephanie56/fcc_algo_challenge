function steamrollArray(arr) {
  var newarr = [];
  arr.forEach(function(item){
    if (Array.isArray(item)){
      newarr = newarr.concat(steamrollArray(item));
    }
    else {
     newarr.push(item);
    }
  });

  return newarr;
}

steamrollArray([1, {}, [3, [[4]]]]);


steamrollArray([1, [1,2]]);
