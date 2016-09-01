/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

	var map = {};
	
	for (var i = 0; i < nums.length; i++) {
        map[nums[i]] =i;
    }

    for(var i = 0; i< nums.length; i++){
		var numberToFind = target - nums[i];
		var index = map[numberToFind];
		if(index !=-1 && i != index){
			return [i, index];
		}
	}
	return false;
};


console.log(twoSum([2, 7, 11, 15], 9), [0, 1])
console.log(twoSum([3,2,4], 6), [1,2])
console.log(twoSum([0,4,3,0], 0), [0,3])
console.log(twoSum([0,4,3,0], 3), [0,2])


/*
var twoSum = function(nums, target) {
    
    for(var i = 0; i< nums.length; i++){
		var numberToFind = target - nums[i];
		var index = nums.indexOf(numberToFind);
		if(index !=-1 && i != index){
			return [i, index];
		}
	}
	return false;
};
 */