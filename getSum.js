/**
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.


 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var array = [a,b];
    return array.reduce(function(total, num) {
	  return total + num;
	});
};

console.log(getSum(1,2))

