// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  var bi = str.split(" ");
  var newarr = [];
  console.log(bi);

  for(var i=0; i < bi.length; i++){
    bi[i] = calBi(bi[i]); // array of char code
  }

  bi.forEach(function(elm){
      newarr.push(String.fromCharCode(elm));
  });

  return newarr.join("");

  function calBi (text){
    var sum = 0;
    for(var i = 0; i < 8; i++){
      if(text[i] == 1){
        sum += Math.pow(2, (7-i));
      }
    }
    return sum;
  } //calBi ends
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
