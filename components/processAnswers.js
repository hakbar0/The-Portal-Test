const orderPickLocation = require('./orderPickLocation');
const { userInput } = require('./userInput');
const { singleShelfToDb, DoubleShelfToDb } = require('../firebase/submitToDb');

function processAnswers(answers) {

  let bay = answers.pick_Location.replace(/[^a-z]/gi, '');

  if (bay.length === 2) DoubleShelfToDb(answers.pick_Location.toUpperCase(), answers.product_code, answers.quantity)

  else singleShelfToDb(answers.pick_Location.toUpperCase(), answers.product_code, answers.quantity)

  if (answers.order_status === 'Yes') userInput();

  else orderPickLocation();

};

module.exports = processAnswers;
