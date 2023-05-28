// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseBadge = "";
  switch(license){

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

    case "MIT": {
      return licenseLink = '[Link to the MIT Licence can be found here](https://opensource.org/licenses/MIT)';
     
      
    }
    case "Mozilla": {
      return licenseLink ='[![Link to the MPL Licence can be found here(https://opensource.org/licenses/MPL-2.0)';
     
    }

    case "Apache 2.0": {
      return licenseLink ='[![Link to the Apache 2.0 Licence can be found here](https://opensource.org/licenses/Apache-2.0)';
     
    }

    case "IBM": {
      return licenseLink = '[![Link to the IPL Licence can be found here](https://opensource.org/licenses/IPL-1.0)';
     
  }
  default: return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){

    return `${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}`
     
  }else " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
 
  return `
  
  ## ${answers.title}
  ${renderLicenseBadge(license)}
 
  ## Description

  # ${answers.description}

  ## Table of Contents

  [Description](#description) 
  

  

  ## Installation

  # ${answers.installation}

  ## Usage

  # ${answers.usage}

  ## Credits

  # ${answers.credits}

  ## Licence: 
  ${renderLicenseSection(answers.license)}

  


`;
}
module.exports = generateMarkdown;
