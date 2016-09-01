
/**
 * Given an array of integers, see is it has a double
 * @param {number[]} nums
 * @return {number}
 */
var hasDoubleNumber = function(nums) {
	var numsSet =  new Set(nums);
    return nums.length != numsSet.size;
};

console.log(hasDoubleNumber([5, 1, 2,5]))
console.log(hasDoubleNumber([5, 1, 2]))