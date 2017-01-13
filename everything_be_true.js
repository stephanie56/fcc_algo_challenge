function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var prop in collection){
    if(!collection[prop].hasOwnProperty(pre)){
      return false;
    }
    else if (!collection[prop][pre]) {
      return false;
    }
  }

  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
