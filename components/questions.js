const bays = require('./bays');
const inquirer = require('inquirer');
const orderPickLocation = require('./orderPickLocation');
const prompt = inquirer.createPromptModule();


const questions = [
  {
    name: 'product_code',
    type: 'input',
    message: 'Enter The Product Code',
    validate: function (input) {
      var done = this.async();
      let productCode = parseInt(input);

      setTimeout(function () {
        if (!(productCode > 0) || (productCode.toString().length !== 5)) {
          done('You need to provide a valid product code. It should have 5 digits.');
          return;
        }
        done(null, true);
      }, 100);
    }
  },
  {
    name: 'quantity',
    type: 'input',
    message: 'Enter The Quantity needed.',
    validate: function (input) {
      var done = this.async();
      let quantityNumber = parseInt(input);

      setTimeout(function () {
        if (!(quantityNumber > 0)) {
          done('You need to provide a valid quanitity number.');
          return;
        }
        done(null, true);
      }, 100);
    }
  },
  {
    name: 'pick_Location',
    type: 'input',
    message: 'Enter The Location',
    validate: function (input) {
      var done = this.async();
      let bay = input.replace(/[^a-z]/gi, '');
      let shelf = input.replace(/[^0-9]/gi, '');

      setTimeout(function () {
        if (!shelf || !bay || shelf < 0 || shelf > 10 || !(bays.indexOf(bay.toUpperCase()) > -1)) {
          done('You need to provide a valid bay letter/letters or shelf number.');
          return;
        }

        done(null, true);
      }, 100);
    }
  },
  {
    name: 'order_status',
    type: 'list',
    message: 'Do you wish to contiue?',
    choices: ['Yes', 'No'],
    defualt: 2,
  }]

  module.exports = questions;