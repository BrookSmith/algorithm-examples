/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */

(function(){


	var lengthOfLongestSubstring = function(s) {

		var longest = "", 
			startIndex=0, 
			charIndex = new Array(256);


		for (var i = 0; i < charIndex.length; i++)
			charIndex[i]=-1;

		for (var i = 0; i < s.length; i++){

			charCode = s[i].charCodeAt(0);

			startIndex = Math.max( charIndex[charCode] + 1, startIndex );    // automatically takes care of -1 case
			charIndex[charCode] = i; // add index to char index
			longest = Math.max(longest, i - startIndex + 1); // 

			
	    }

	   // console.log(charIndex);

		return longest;

	};


	console.log(lengthOfLongestSubstring("abcabc"),"3 : abc");
	console.log(lengthOfLongestSubstring("bbbbb"),"1 : b");
	console.log(lengthOfLongestSubstring("pwwkew"),"3 : wke");

})(this);


