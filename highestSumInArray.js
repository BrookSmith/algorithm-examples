/**
 * Given an array of integers, return two numbers with the largest sum.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var twoSum = function(nums) {

	// lazy answer
	// var num1 = nums.indexOf(Math.max.apply(null, nums));
	// nums.splice(num1,1)
	// return [num1, nums.indexOf(Math.max.apply(null, nums))];
	
	let s = Math.pow(-2,31),
	l = s;

	for(let i=0; i<nums.length; i++){

		let num = nums[i];

		if(num>l){
			s = l;
			l = nums[i];
		}else if(num>s){
			s = nums[i];
		}
		
	}
	return [s,l];
};


console.log(twoSum([12,2, 7, 11, 15]), [12,15])
console.log(twoSum([1,2,3,4,5,6,7]), [6,7])
console.log(twoSum([0,4,3,0]), [3,4])
console.log(twoSum([8,7,6,5,4,3,2,1]), [7,8])
