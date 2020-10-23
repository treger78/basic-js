const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

	let outputStr = str;

	if (arguments.length === 0) {
		throw new Error();
	}

	if (typeof str !== 'string' || typeof options.addition !== 'string') {
		str = String(str);
		options.addition = String(options.addition);
	}

	if (options.separator === undefined) {
		options.separator = '+';
	} 

	if (options.additionSeparator === undefined) {
		options.additionSeparator = '|';
	}

	if (options.additionRepeatTimes === undefined && options.repeatTimes === undefined) {
		return outputStr += options.addition;
	}

	if (options.additionRepeatTimes === undefined) {
		for (var i = 0; i < options.repeatTimes - 1; i++) {
			outputStr += options.separator + str;
		}
	}

	if (options.additionRepeatTimes !== undefined && options.repeatTimes !== undefined && options.additionSeparator === '|') {
		for (var i = 0; i < options.repeatTimes - 1; i++) {
			for (var j = 0; j < options.additionRepeatTimes; j++) {
				outputStr += options.addition;
			}
			outputStr += options.separator + str;
		}
		outputStr += options.addition;
	}

	if (options.additionRepeatTimes !== undefined && options.repeatTimes !== undefined 
		&& options.separator !== '+' && options.additionSeparator !== '|') {
		
		for (var i = 0; i < options.repeatTimes; i++) {
			for (var j = 0; j < options.additionRepeatTimes; j++) {
	          if (options.additionRepeatTimes - 1 === j) {
	            outputStr += options.addition;
	          } else {
	            outputStr += options.addition + options.additionSeparator;
	          }		
			}
	        if (options.repeatTimes - 1 !== i) {
	          outputStr += options.separator + str;
	        }		
		}
	}

	return outputStr;

};
