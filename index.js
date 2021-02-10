//Convert a number to roman numerals

let buildingRomanNumeral = [];

function romanToInt(s){
	// {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
	let numberArray = [s];
	let numberArrayOfChars = [];

	//increments by multitudes of 2 and 5
  numberArrayOfChars = numberArray.toString().split('');

	// console.log(numberArrayOfChars);
	// console.log(numberArrayOfChars.length + ' is the array length');
	// console.log('------------------------');
	
	//sort each place for thousands, hundreds, tens (doubles), and ones (singles)
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
	else return 'Number is invald.'; //
	
	console.log(buildingRomanNumeral.join('')); //put our new array together with roman numerals
}

function sortSingles(numArray){ //ones
	//console.log('sorting singles - first digit' + numArray[0]);
	if(numArray[0] == 1){buildingRomanNumeral.push('I');}
	else if(numArray[0] == 2){buildingRomanNumeral.push('II');}
	else if(numArray[0] == 3){buildingRomanNumeral.push('III');}
	else if(numArray[0] == 4){buildingRomanNumeral.push('IV');}
	else if(numArray[0] == 5){buildingRomanNumeral.push('V');}
	else if(numArray[0] == 6){buildingRomanNumeral.push('VI');}
	else if(numArray[0] == 7){buildingRomanNumeral.push('VII');}
	else if(numArray[0] == 8){buildingRomanNumeral.push('VIII');}
	else if(numArray[0] == 9){buildingRomanNumeral.push('IX');}
	//console.log(buildingRomanNumeral);
}

function sortDoubles(numArray){ //tens
	//console.log('sorting doubles - first digit ' + numArray[0]);
	if(numArray[0] == 1){buildingRomanNumeral.push('X');}
	else if(numArray[0] == 2){buildingRomanNumeral.push('XX');}
	else if(numArray[0] == 3){buildingRomanNumeral.push('XXX');}
	else if(numArray[0] == 4){buildingRomanNumeral.push('XL');}
	else if(numArray[0] == 5){buildingRomanNumeral.push('L');}
	else if(numArray[0] == 6){buildingRomanNumeral.push('LX');}
	else if(numArray[0] == 7){buildingRomanNumeral.push('LXX');}
	else if(numArray[0] == 8){buildingRomanNumeral.push('LXXX');}
	else if(numArray[0] == 9){buildingRomanNumeral.push('XC');}
	//console.log(buildingRomanNumeral);
}

function sortHundreds(numArray){ //hundreds
	//console.log('sorting hundreds - first digit ' + numArray[0]);
	if(numArray[0] == 1){buildingRomanNumeral.push('C');}
	else if(numArray[0] == 2){buildingRomanNumeral.push('CC');}
	else if(numArray[0] == 3){buildingRomanNumeral.push('CCC');}
	else if(numArray[0] == 4){buildingRomanNumeral.push('CD');}
	else if(numArray[0] == 5){buildingRomanNumeral.push('D');}
	else if(numArray[0] == 6){buildingRomanNumeral.push('DC');}
	else if(numArray[0] == 7){buildingRomanNumeral.push('DCC');}
	else if(numArray[0] == 8){buildingRomanNumeral.push('DCCC');}
	else if(numArray[0] == 9){buildingRomanNumeral.push('CM');}
	//console.log(buildingRomanNumeral);
}

function sortThousands(numArray){ //thousands
	//console.log('sorting thousands - first digit ' + numArray[0]);
	for(let c = 1; c <= Number(numArray[0]); c++){
		buildingRomanNumeral.push('M');
	}
	//console.log(buildingRomanNumeral);
}


romanToInt(1034); //number to test

//3322 