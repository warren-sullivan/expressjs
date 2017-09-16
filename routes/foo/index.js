const router = require('express').Router();

const bar = [];

router.get('/', (req, res) => {
	res.status(200).send('no param');
});

router.get('/:param', (req, res) => {
	res.status(200).send(alternateCase(req.params.param));
});


router.post('/', (req, res) => {
	res.status(200).send('no param');
});

router.post('/:param', (req, res) => {
	res.status(200).send(highAndLow(req.params.param));
});


router.put('/', (req, res) => {
	res.status(200).send('no param');
});

router.put('/:param', (req, res) => {
	res.status(200).send(cipher(req.params.param));
});


function alternateCase(inputString) {
	var inputStringArray = inputString.split('');
	var alteredStringArray = [];

	for (var i = 0; i < inputStringArray.length; i++) {
		if (isUppercase(inputStringArray[i])) {
			alteredStringArray.push(inputStringArray[i].toLowerCase());
		} else if (isLowercase(inputStringArray[i])) {
			alteredStringArray.push(inputStringArray[i].toUpperCase());
		} else {
			alteredStringArray.push(inputStringArray[i]);
		}
	}

	var alteredString = alteredStringArray.join('');
	return alteredString;
}

function isUppercase(letter) {
	var charCode = letter.charCodeAt();
	if (charCode >= 65 && charCode <= 90) {
		return true;
	} else {
		return false;
	}
}

function isLowercase(letter) {
	var charCode = letter.charCodeAt();
	if (charCode >= 97 && charCode <= 122) {
		return true;
	} else {
		return false;
	}
}


function highAndLow(stringOfNums) {
	numArray = stringOfNums.split(" ");
	let highest = 0;
	let lowest = 10;

	for (let i = 0; i < numArray.length; i++) {
		if (highest <= numArray[i]) {
			highest = numArray[i];
		}

		if (lowest >= numArray[i]) {
			lowest = numArray[i];
		}
	}

	return highest + " " + lowest;

}


function cipher(str) {
	var upperString = str.toUpperCase();
	var newStr = [];

	for (var i = 0; i < upperString.length; i++) {
		var charCode = upperString.charCodeAt(i);
		var newCharCode = 0;
		if (charCode < 78) {
			newCharCode = 90 - (13 - (charCode - 64));
		}

		if (upperString[i] === ' ') {
			newStr.push(' ');
		} else if (newCharCode > 0) {
			newStr.push(String.fromCharCode(newCharCode));
		} else {
			newStr.push(String.fromCharCode(charCode - 13));
		}
	}
	return newStr.join('');
}

module.exports = router;