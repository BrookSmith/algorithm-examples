/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    var word = s.split("");
    var newWord = [], vowelArray = [];
     
    function isVowel(letter){
        var vowels = "aeiouAEIOU".split("");
        for(var i=0; i< vowels.length; i++){
            if(vowels[i] === letter)
                return true;
        }
      return false;
    }

    for(var i=0; i< word.length; i++){
        if(isVowel(word[i])){
            vowelArray.push(word[i]);
            newWord.push(true);
        }else{
            newWord.push(word[i]);
        }
            
    }

    for(i=0; i< newWord.length; i++){
        if(newWord[i]===true){
          newWord[i] = vowelArray.pop();
        }
    }
    
    return newWord.join("");
    
};

console.log("reverseVowels:", reverseVowels("reverseVowels"),  " == \"revorseVewels\"" );