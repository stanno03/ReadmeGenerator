// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      
  switch(license){

    case license === "MIT": {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      
    }
    case license === "MPL": {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }

    case license === "Apache 2.0": {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }

    case license === "IBM": {
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    default: return " ";
  }

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){

    case license === "MIT": {
      return `[![License: MIT](https://opensource.org/licenses/MIT)`
      
    }
    case license === "Mozilla": {
      return `[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
    }

    case license === "Apache 2.0": {
      return `[![License](https://opensource.org/licenses/Apache-2.0)`
    }

    case license === "IBM": {
      return `[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`
    }
    default: return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `## licence`;
  }else " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `

  ## ${answers.title}
 
  ## Table of Contents
  *[Description](#description)

  ## Description
  # ${answers.description}

  ## Installation
  # ${answers.installation}

  ## Usage
  # ${answers.usage}

  ## Credits
  # ${answers.credits}

  ## Licence
  # ${answers.license}
  ${renderLicenseBadge()}
  ${renderLicenseLink()}


`;
}

module.exports = generateMarkdown;
