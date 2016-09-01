/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

	var pascal = [[1]];

	function createRow(lastRow){
		var newRow = [1];
		for(var j=1; j<lastRow.length; j++){
			newRow[j] = lastRow[j] + lastRow[j-1]
		}
		newRow.push(1);
		
		return newRow;
	}

	if(numRows>0){
		for(var i=0; i<numRows-1; i++){
			pascal.push(	createRow(	pascal[pascal.length-1]	)	);
		}
		return pascal;
	}else{
		return [];
	}
};

console.log(generate(0), generate(1), generate(10));