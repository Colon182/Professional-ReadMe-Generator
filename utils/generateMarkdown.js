// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    // find right link for license badges, one below is example only
    return `www.github.com/license/${data.license}/ffdsafasdfs`    
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    // find links for licenses
    return `licenselink.com/${data.license}`;
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none") {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents (Optional)
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
  
  ## License
  ${data.License}
  
  ## How to Contribute
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Want to reach me or see more of my work and projects? My Github is linked below and my Email is listed as well.
  * [Github](https://github.com/${data.github})
  * ${data.email}

`;
}

module.exports = generateMarkdown;
