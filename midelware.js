// midelware.js
const Logger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

module.exports = Logger;
