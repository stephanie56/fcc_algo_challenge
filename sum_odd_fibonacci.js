/** sum all the odd fibonacci numbers **/

function sumFibs(num) {

  var arr = [1,1];
  var index = 2;

  //generate an array of odd fibonacci numbers
  for(var i = 2; i <= num ; i++){
    if(i === arr[index-2]+arr[index-1]){
      arr.push(i);
      index++;
    }
  }

  var result = arr.filter(function(num){return num%2!==0;}).reduce(function(result, num){return result+num;},0);

  return result;

}

sumFibs(100);
