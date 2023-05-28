// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions and capture the user input to insert into template.
const questions = [
            
                {
                    type: 'input',
                    name: 'title',
                    message: "What is the Project Title?",
                    
                    // validate: (value)


                },

                {
                    type: 'input',
                    name: 'description',
                    message: "Provide a Description of the project",
                  
                    // validate: (value)
                },

                {
                    type: 'input',
                    name: 'installation',
                    message: "Please provide the details on how to install your application",
                  
                }, 

                {
                    type: 'input',
                    name: 'usage',
                    message: "Please provide deatails on how the program is used",
                   
                }, 

                {
                    type: 'input',
                    name: 'credits',
                    message: "Please provide any contributors to the project",
                    
                }, 

                {
                    type: 'list',
                    name: 'license',
                    message: "Please select a license for the project:",
                    choices: ['None', 'IBM', 'Apache 2.0', 'MIT', 'MPL' ]
                   
                },

                {
                    type: 'input',
                    name: 'contribution',
                    message: "Please define how to contribute to this project",
                },

                {
                    type: 'input',
                    name: 'tests',
                    message: "Please detail testing for this project",
                },

                {
                    type: 'input',
                    name: 'depedanciess',
                    message: "Please provide any dependancies for this project",
                },

                {
                    type: 'input',
                    name: 'todo',
                    message: "Please provide the To-Do list for the project",
                },

                {
                    type: 'input',
                    name: 'githubUsername',
                    message: "What is your Github Username?",
                },

                {
                    type: 'input',
                    name: 'email',
                    message: "What is your email address?",
                },           

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log('There was an error writing the readMe file: ' + error);
        }
        else{
            console.log('Your Readme file has been generated')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    const readme = generateMarkdown(answers)
    writeToFile('Readme.md', readme)
    })
   
}

// Function call to initialize app
init();
