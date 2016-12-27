/** DNA Pairing **/

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  var dnaPair = [["A","T"],["T","A"],["C","G"],["G","C"]];
  var arr = [];
  str.split("").map(function(elm){
    for(var i = 0; i < dnaPair.length; i++){
      if((elm) == dnaPair[i][0]){
        arr.push(dnaPair[i]);
      }
    }
  });
  return arr;
}
pairElement("GCG");
