/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(function(result, i) {
		return result ^ i;
	});
};

console.log(singleNumber([1,2,3,4,1,2,3]))
