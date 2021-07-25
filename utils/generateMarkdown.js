// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case "MIT":
      return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case "IBM":
      return `
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`;
    case "Unlicense":
      return `
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    default: return license
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case "MIT":
      return `(https://opensource.org/licenses/MIT)  `;
    case "IBM":
      return `(https://opensource.org/licenses/IPL-1.0)  `;
    case "Unlicense":
      return `(http://unlicense.org/)  `;
    default: return license
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case "MIT":
      return `
Licensed under the [MIT](https://opensource.org/licenses/MIT) license. `;
    case "IBM":
      return `
Licensed under the [IBM](https://opensource.org/licenses/IPL-1.0) Public License Version 1.0 `;
    case "Unlicense":
      return `
Licensed under The [Unlicense](http://unlicense.org/) `;
    default: return license
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.projectLicense)}${renderLicenseLink(data.projectLicense)}

## Description
${data.projectDesc}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#questions)
  
## Installation
- ${data.projectInstall}

## Usage
${data.projectUsage}

## License
${renderLicenseSection(data.projectLicense)}

## Contributing
There are many ways in which you can participate in this project, for example:

- ${data.projectContrib}

## Test
- ${data.projectTest}

## Questions
* Please feel free to leave comments on my GitHub profile [GitHub](${data.github})
* Or email me with your questions at ( [${data.email}](mailto:${data.email}) )
 `;
}

module.exports = generateMarkdown;
