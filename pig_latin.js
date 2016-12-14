/* Pig latin */

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Coded by Stephanie Zeng https://github.com/stephanie56
// vowel letters include A, E, I, O, and U


/* Pig latin */

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Coded by Stephanie Zeng https://github.com/stephanie56
// vowel letters include A, E, I, O, and U


function translatePigLatin(str) {

  var strArr = str.split("");
  var index;
  for(var i = 0; i < strArr.length; i++){
    if(strArr[i] == "a" || strArr[i] == "e" || strArr[i] == "i" || strArr[i] == "o" || strArr[i] == "u"){
      index = i;
      break;
    }
  }

  if(index === 0){
    str = str + "way";
  }
  else {
    var substring = strArr.splice(0,index);
    str = str.slice(index) + substring.join("") + "ay";
  }

  return str;
}

translatePigLatin("glove");
