/* Missing letters */
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var index;
  var letterlist = "abcdefghijklmnopqrstuvwxyz";
  if(letterlist.indexOf(str) !== -1){
    return undefined;
  }

  for(var i = 0, n = str.length; i < n; i++){
    var change = str.charCodeAt(i+1) - str.charCodeAt(i);
    if(change !== 1){
      index = i;
      break;
    }

  }
  var code = str.charAt(index).charCodeAt(0)+1;
  str = String.fromCharCode(code);
  return str;
}

fearNotLetter("cdefg");
