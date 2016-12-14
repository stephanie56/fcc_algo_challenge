// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {

  var numArr = [];
  var romanNum = ["I", "II", "III", "IV", "V", "VI", "VII","VIII", "IX"];

 while(num >= 0){

   if(num >= 1000){
   num -= 1000;
   numArr.push("M");

   }

  else if(num >= 900){
   num -= 900;
   numArr.push("CM");
 }

 else if(num >= 500 && num < 900){
   num -=500;
   numArr.push("D");
 }

 else if(num >= 100 && num < 500){
   num -=100;
   numArr.push("C");
 }

 else if(num >= 90){
   num -= 90;
   numArr.push("XC");
 }

 else if(num >= 50){
   num -= 50;
   numArr.push("L");
 }

 else if(num >= 40){
   num -= 40;
   numArr.push("XL");
 }

 else if(num >= 10){
   num -= 10;
   numArr.push("X");
 }

 else if (num >= 1) {
   numArr.push(romanNum[num - 1]);
   num = 0;
  }

 else {
   num = numArr.join("");
   return num;
 }

 } // whileloop ends


}

convertToRoman(40);
