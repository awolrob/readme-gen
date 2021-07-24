// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const { projectTitle, projectDesc, projectInstall, projectContrib, projectLicense, email, github } = data;
  // return `# ${data.projectTitle}
  return `# ${data.projectTitle}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
## Description
${data.projectDesc}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
${data.projectDesc}

## Usage
${data.projectUsage}

## License
${data.projectLicense}

Licensed under the [MIT](https://opensource.org/licenses/MIT) license.

Licensed under the [IBM](https://opensource.org/licenses/IPL-1.0) Public License Version 1.0 

Licensed under The [Unlicense](http://unlicense.org/)

## Contributing
${data.projectContrib}

There are many ways in which you can participate in this project, for example:

## Test
${data.projectTest}


## Questions
* Please feel free to leave comments on my GitHub profile [GitHub](${data.github})
* Or email me with your questions at ( [${data.email}](mailto:${data.email}) )
 `;
}

module.exports = generateMarkdown;
