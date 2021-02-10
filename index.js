//Convert a number to roman numerals

let buildingRomanNumeral = [];

function romanToInt(s){
	// {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
	let numberArray = [s];
	let numberArrayOfChars = [];

	//increments by multitudes of 2 and 5
  numberArrayOfChars = numberArray.toString().split('');

	console.log(numberArrayOfChars);
	console.log(numberArrayOfChars.length + ' is the array length');
	console.log('------------------------');

	if(numberArrayOfChars.length === 4) {
		sortThousands(numberArrayOfChars);
		numberArrayOfChars = numberArrayOfChars.slice(1, numberArrayOfChars.length);
	}

	if(numberArrayOfChars.length === 3) {
		sortHundreds(numberArrayOfChars);
		numberArrayOfChars = numberArrayOfChars.slice(1, numberArrayOfChars.length);
	}
	if(numberArrayOfChars.length === 2) {
		sortDoubles(numberArrayOfChars);
		numberArrayOfChars = numberArrayOfChars.slice(1, numberArrayOfChars.length);
	}
	if(numberArrayOfChars.length === 1) {
		sortSingles(numberArrayOfChars);
		numberArrayOfChars = numberArrayOfChars.slice(1, numberArrayOfChars.length);
	}
	else return 'Number is invald.';
	
	console.log(buildingRomanNumeral.join(''));
}

function sortSingles(numArray){
	console.log('sorting singles - first digit' + numArray[0]);
	for(let c = 1; c <= Number(numArray[0]); c++){
		buildingRomanNumeral.push('V');
	}
	console.log(buildingRomanNumeral);
}

function sortDoubles(numArray){
	console.log('sorting doubles - first digit ' + numArray[0]);
	for(let c = 1; c <= Number(numArray[0]); c++){
		buildingRomanNumeral.push('X');
	}
	console.log(buildingRomanNumeral);
}

function sortHundreds(numArray){
	console.log('sorting hundreds - first digit ' + numArray[0]);
	for(let c = 1; c <= Number(numArray[0]); c++){
		buildingRomanNumeral.push('C');
	}
	console.log(buildingRomanNumeral);
}

function sortThousands(numArray){
	console.log('sorting thousands - first digit ' + numArray[0]);
	for(let c = 1; c <= Number(numArray[0]); c++){
		buildingRomanNumeral.push('M');
	}
	console.log(buildingRomanNumeral);
}


romanToInt(3322);
//3322
// 443 = CDXLIII

// 443 = MCDXLIII