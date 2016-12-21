// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
 var notprimes = [];
 var sum = 0;
 for(var p = 2; p <= num; p++){
   for(var d = 2; d < 10; d++){
     if(p%d === 0 && p !== d){
       notprimes.push(p);
       break;
     }
   } // loop through 2 - 9
 }

 for(var i = 0; i <= num; i++){
   sum += i;
 }

 var notprimesum = notprimes.reduce(function(a,b){
  return a+b;
  }, 0);

  var result = sum - notprimesum - 1;
  console.log(notprimes);
  console.log("not prime sum:" + notprimesum);
  console.log(sum);
  console.log(notprimesum);
  console.log(sum - notprimesum - 1);
}

sumPrimes(977);
