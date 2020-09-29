const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
  let result = members.map(element => {
    if (typeof element === 'string')
    {
    return element.trim().toUpperCase()[0];
    }
    }
  )
  return result.sort().join('')
  }
  else {
    return false
  }
};
