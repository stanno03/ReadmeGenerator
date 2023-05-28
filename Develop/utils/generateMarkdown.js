// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";

  switch(license){
    case "None": {
      return licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    case "MIT": {
      return licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    case "Mozilla": {
      return licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }
    case "Apache 2.0": {
      return licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    case "IBM": {
      return licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    }
  default: return licenseBadge;
  }
}
 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch(license){
    case "None": {
      return licenseLink;
    }
    case "MIT": {
      return licenseLink = '[Link to the MIT License can be found here](https://opensource.org/licenses/MIT)'; 
    }
    case "Mozilla": {
      return licenseLink ='[Link to the MPL License can be found here(https://opensource.org/licenses/MPL-2.0)';
    }
    case "Apache 2.0": {
      return licenseLink ='[Link to the Apache 2.0 License can be found here](https://opensource.org/licenses/Apache-2.0)'
    }
    case "IBM": {
      return licenseLink = '[Link to the IPL License can be found here](https://https://opensource.org/license/ibmpl-php)';
   }
  default: return licenseLink;

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
  
    return "## License: " + `${license}`  + '\n' +
    "The project is covered under the " +  `${license}` + " license " + '\n' + 
    `${renderLicenseLink(license)}`
     
  }else " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
 
  return `
  
  # ${answers.title} ${renderLicenseBadge(answers.license)}
 
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Credits](#credits)
  - [License](#license)
  - [Testing](#testing)
  - [Dependancies](#dependancies)
  - [To Do](#todo) 
  - [Contribution](#contribution)
  - [Questions](#questions) 

  ## Description

  ${answers.description}

  ## Installation

  ${answers.installation}

  ## How to use

  ${answers.usage}

  ## Credits

  ${answers.credits}

  ${renderLicenseSection(answers.license)}

  ## Testing

  ${answers.tests}

  ## Dependancies

  ${answers.dependancies}

  ## To Do

  ${answers.todo}

  ## Contribution 

  ${answers.contribution}

  ## Questions 

  For any questions about the project please feel free to contact emailing [${answers.email}](mailto:${answers.email})
  or you can find a link to my Github here [${answers.githubUsername}](https://github.com/${answers.githubUsername})

`;
}
module.exports = generateMarkdown;
