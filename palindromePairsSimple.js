/**
 * 
 * Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.
 * 
 * Example:
 * Given words = ["bat", "tab", "cat"]
 * Return [[0, 1], [1, 0]]
 * The palindromes are ["battab", "tabbat"]
 * 
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
	var pairs = [];

	function isPalindrome(word){
		return word === word.split("").reverse().join("");
	}

	for(var i=0; i<words.length; i++){
		for(var j=0; j<words.length; j++){

			if( isPalindrome(words[i] + words[j]) ){
				
				if(i!=j){
					//console.log(words[i] + words[j]);
				
			 		pairs.push([i, j]);
			 	}
			}
		}
	}
    

    return pairs;
};

console.log( palindromePairs(["abcd","dcba","lls","s","sssll"]) );