const orderPickLocation = require('./orderPickLocation');
const { userInput } = require('./userInput');
const orderSingleShelf = [];
const orderDoubleshelf = [];

function processAnswers(answers) {
  console.log("And your answers are:", answers);
  let bay = answers.pick_Location.replace(/[^a-z]/gi, '');
  if (bay.length === 2) orderDoubleshelf.push([answers.pick_Location.toUpperCase(), answers.product_code, answers.quantity]);
  else orderSingleShelf.push([answers.pick_Location.toUpperCase(), answers.product_code, answers.quantity]);
  if (answers.order_status === 'Yes') userInput();
  else {
    orderPickLocation(orderSingleShelf, orderDoubleshelf);
  }
};

module.exports = processAnswers;
