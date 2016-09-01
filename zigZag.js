/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

	var rows = [],
		row = 0,
		direction = -1,
		values = s.split("");

	if(numRows<=1)
		return s;

	for(var i = 0; i<numRows; i++)
		rows[i] = "";

	i = 0;
	while(values.length>0){
		if(i%(numRows-1)===0)
        	direction *= -1;
		rows[row] += values.shift();
		row += direction;		
		i++;
	}
    return rows.join("");
};



console.log(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR")
console.log(convert("ABC", 2), "ACB")
console.log(convert("ABCDE", 4), "ABCED")
console.log(convert("AB", 1), "AB")






