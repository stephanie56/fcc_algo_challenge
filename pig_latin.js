/* Pig latin */

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Coded by Stephanie Zeng https://github.com/stephanie56
// vowel letters include A, E, I, O, and U


function translatePigLatin(str) {

  var strArr = str.split("");

  if (strArr[0] == "a" || strArr[0] == "e" || strArr[0] == "i" || strArr[0] == "o" || strArr[0] == "u"){
    str = str + "way";
  }
  else {
    str = str.slice(1) + strArr[0] + "ay";
  }

 return str;
}

translatePigLatin("consonant");
