const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
 
	let foundCat = 0;

	for (let backyardJ of backyard) {
		for (let element of backyardJ) {
			if (element == "^^") {
				foundCat++;
			}
		}
	}

	return foundCat;

};
