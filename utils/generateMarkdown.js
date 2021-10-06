// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return `[![License](https://img.shields.io/badge/license-${license}-green)](./LICENSE)`    
  }
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `https://api.github.com/licenses/${license}`;
  }
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `# License
    Licensed under ${license} license.`;
  } 
  else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## How to Contribute
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Want to reach me or see more of my work and projects? My Github is linked below and my Email is listed as well.
  * [Github](https://github.com/${data.github})
  * ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
