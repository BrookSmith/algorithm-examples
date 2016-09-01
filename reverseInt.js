/**
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	if(! Number.isInteger(x))
		return 0;

	var result = Math.abs(x);
	result = parseInt(result.toString().split("").reverse().join(""));
	
	if(result<=Math.pow(2,31))
		return x<0 ? -result : result;
	else
		return 0;
};


console.log(reverse(123), 321);
console.log(reverse(-123), -321);
console.log(reverse(0), 0);
console.log(reverse(""), "");