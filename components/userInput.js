const bays = require('./bays');
const inquirer = require('inquirer');
const orderPickLocation = require('./orderPickLocation');
const questions = require('./questions');
const prompt = inquirer.createPromptModule();
const { singleShelfToDb, DoubleShelfToDb } = require('../firebase/submitToDb');

function userInput() {
  prompt(questions).then(answers => {
    processAnswers(answers);
  });
}

function processAnswers(answers) {
  
    let bay = answers.pick_Location.replace(/[^a-z]/gi, '');
  
    if (bay.length === 2) DoubleShelfToDb(answers.pick_Location.toUpperCase(), answers.product_code, answers.quantity)
  
    else singleShelfToDb(answers.pick_Location.toUpperCase(), answers.product_code, answers.quantity)
  
    if (answers.order_status === 'Yes') userInput();
  
    else orderPickLocation();
  
  };

module.exports = userInput



