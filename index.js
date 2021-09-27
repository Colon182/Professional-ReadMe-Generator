// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')
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
        name: 'license',
        message: 'What type of license are you using?',
        choices: ['MIT','Apache License 2.0','BSD License', 'GPL License','none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How will you test your application?',
        default: 'npm run test'
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
// console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => writeToFile('./dist/README.md', generateMarkdown({...answers})))
    .then(() => console.log("README.md successfully created"))
    .catch((err) => console.error(err))
}

// Function call to initialize app
init();
