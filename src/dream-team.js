const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) {
    return false;
  }

  function isString(value) {
  	return typeof value === 'string';
  }

  members = members.filter(isString).filter(Boolean);;
  members = String(members).replace(/ /g, '').toUpperCase().split(",").sort();
  
  let result = '';

  for (var i = 0; i < members.length; i++) {
  	result += members[i][0];
  }

  return result;

};
