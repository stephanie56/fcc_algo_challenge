// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
 var result = 0;
 var arr = [2,3,4,5,6,7,8,9]

 for(var i = 2; i <= num; i++){
   var counter = 0;
   for(var index = 0; index < arr.length; index++){
     var d = arr[index];
     if(i%d === 0){
       counter++;
     }
   }
   if(counter === 0 || (counter === 1 && i < 10)){
     result += i;
     arr.push(i);
   }
 } // for loop ends

  //var result = numbers.reduce(function(sum, num){ return sum+num;}, 0);
  console.log(result);

}

sumPrimes(977);
