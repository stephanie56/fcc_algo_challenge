function steamrollArray(arr) {
  var newarr = [];
  var array = arr.map(function(item){
    if(!Array.isArray(item)){
      return item;
    }
    else{
        steamrollArray(item);
    }
  });

  console.log(array);
  // if(Array.isArray(arr)){
  //   arr.forEach(function(item){
  //     return streamrollArray(item);
  //   });
  // }
  // else{
  //   newarr.push(arr)
  // }
  //console.log(newarr);
}


steamrollArray([1, [1,2]]);
