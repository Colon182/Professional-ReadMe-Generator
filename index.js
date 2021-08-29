// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What type of license are you using?',
        choices: ['mit','lgpl-3.0','mpl-2.0', 'agpl-3.0','none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How will you test your application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README.md successfully created"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => writeToFile('README.md', generateMarkdown(data)));
}

// Function call to initialize app
init();
