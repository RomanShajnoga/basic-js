const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(member) {
  // throw new CustomError('Not implemented');
  if (!Array.isArray(member)) {
    return false;
  }

  const result = member
  .filter(el => el && typeof el === 'string')
  .map(el => el.trim().toUpperCase())
  .sort()
  .reduce((accumulator, element) => (accumulator += element[0]), '');

return result ? result : false;
};