/* Wherefore Art Thou */

// make a function that looks though an array of objects (first argument) and returns an array of all objects that have matching property and value pairs.
// each property and value pairs of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source){

  var arr = [];
  var propName = Object.keys(source);

  collection.forEach(function(obj){

  if(checkPropName(obj, propName) && compareValue(obj, propName, source)){
      arr.push(obj);
    }

   function checkPropName(objItem, keyArr){
      for(var i = 0; i < keyArr.length; i++){
        if(!objItem.hasOwnProperty(keyArr[i]))
          return false;
      }
      return true;
    }

    function compareValue(objItem, keyArr, srcObject){
      for(var i = 0; i < keyArr.length; i++){
        if(objItem[keyArr[i]] != srcObject[keyArr[i]])
          return false;
        }
      return true;
    }
  });
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
