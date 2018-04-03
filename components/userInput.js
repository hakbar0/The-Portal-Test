const bays = require('./bays');
const inquirer = require('inquirer');
const pickLoctionArray = [], quantityArray = [], productCodeArray = [];

function userInput() {
  inquirer.prompt([{
    name: 'product_code',
    type: 'input',
    message: 'Enter The Product Code',
  },
  {
    name: 'quantity',
    type: 'input',
    message: 'Enter The Quantity needed.',
  },
  {
    name: 'pick_Location',
    type: 'input',
    message: 'Enter The Location',
  },
  {
    name: 'order_status',
    type: 'list',
    message: 'Do you wish to contiue?',
    choices: ['Yes', 'No'],
    defualt: 2,
  }
  ]).then((answers) => {
    productCodeArray.push(answers.product_code);
    quantityArray.push(answers.quantity);
    pickLoctionArray.push(answers.pick_Location);
    if (answers.order_status === 'Yes') userInput();
    else console.log(pickLoctionArray, quantityArray, productCodeArray)
  })
}

module.exports = {
  userInput,
  pickLoctionArray,
  quantityArray,
  productCodeArray
}


