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

               

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log('Sorry there was an error : ' + error);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    const readme = generateMarkdown(answers)
    console.log(readme)
    console.log(answers.license)
    writeToFile('Readme.md', readme)
    })
   
}

// Function call to initialize app
init();
