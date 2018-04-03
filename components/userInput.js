const bays = require('./bays');
const inquirer = require('inquirer');
const orderPickLocation = require('./orderPickLocation');
const questions = require('./questions');
const prompt = inquirer.createPromptModule();
const processAnswers = require('./processAnswers');

function userInput() {
  prompt(questions).then(answers => {
    processAnswers(answers);
  });
}

module.exports = {
  userInput
}


