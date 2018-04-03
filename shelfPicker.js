const bays = require('./bays');
const inquirer = require('inquirer');
const pickLoctionArray = [], quantityArray = [], productCodeArray = [];


function isRealOrder(shelf, bay) {
  if (!shelf || !bay || shelf < 0 || shelf > 10) console.log('failed test');
}

function hello() {
  console.log('hello');
}

function orderPicker(pickLocation, quantity, productCode) {
  let bay = pickLocation.replace(/[^a-z]/gi, '');
  let shelf = pickLocation.replace(/[^0-9]/gi, '');

  isRealOrder(shelf, bay);
}


function userInput(){
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
]).then((answers) => {
  productCodeArray.push(answers.product_code);
  quantityArray.push(answers.quantity);
  pickLoctionArray.push(answers.pick_Location);
  console.log(productCodeArray,  quantityArray,  pickLoctionArray);
});
}

userInput();