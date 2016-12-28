// Spinal Tap Case
// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  function upperToHyphenLower(match){
      return '-' + match.toLowerCase();
  }
  str = str.replace(/[\s\_]/g, "-");
  str = str.replace(/[A-Z]/g, upperToHyphenLower);
  str = str.replace(/\-{1,}/g,"-");
  if(str[0] === '-'){
    str = str.slice(1);
  }
  return str;
}

spinalCase('This IsSpinalTap');
