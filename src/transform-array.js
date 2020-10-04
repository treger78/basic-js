const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!Array.isArray(arr)) {
		throw Error();
	} else if (arr.length === 0) {
		return [];
	} else if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && 
		!arr.includes('--double-prev')) {
		return arr;
	}

	let transformedArr = arr;

  	transformedArr = transformedArr.filter((el) => el !== undefined);

	for (var i = 0; i < transformedArr.length; i++) {

		if (transformedArr[i] === '--discard-next' && i !== transformedArr.length - 1) {
      		transformedArr.splice(i + 1, 1);
		} else if (transformedArr[i] === '--discard-prev' && i !== 0) {
			if (transformedArr[i - 1] !== '--discard-next') {
				transformedArr.splice(i - 1, 1);
			}
		} else if (transformedArr[i] === '--double-next' && i !== transformedArr.length - 1) {
			transformedArr.splice(i + 1, 0, transformedArr[i + 1]);
		} else if (transformedArr[i] === '--double-prev' && i !== 0) {
			if (transformedArr[i - 1] !== '--discard-next') {
				transformedArr.splice(i + 1, 0, transformedArr[i - 1]);
			}
		}

	}

	return transformedArr.filter((el) => el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && 
			el !== '--double-prev');

};
