/**
 * Write a program that uses console.log to print all the numbers from 1 to 100, with 
 * two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
 * and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 * 
 * When you have that working, modify your program to print "FizzBuzz", for numbers 
 * that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers 
 * divisible by only one of those).
 * 
 * @return {string}
 */

var fizzBuzz = function() {
    
	let result = "",
		output="";

	for(let i=1; i<=100; i++){
		output="";

		output += i%3==0 ? "Fizz" : "";
		output += i%5==0 ? "Buzz" : "";
		
		result += ( output || i ) + "\n";

	}

	return result;
};

console.log(fizzBuzz())

