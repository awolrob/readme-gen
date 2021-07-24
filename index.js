// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

console.log('Welcome to a professional README.md file generator!');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: "What is your project title",
    default: "Rob Ellingson's project title",
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('You need to enter a project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectDesc',
    default: "Rob Ellingson's project description",
    message: "What is your project description",
    validate: projectDesc => {
      if (projectDesc) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectInstall',
    default: "Rob Ellingson's project install instructions",
    message: "What are your install instructions",
    validate: projectInstall => {
      if (projectInstall) {
        return true;
      } else {
        console.log('You need to enter your project install instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectUsage',
    default: "Rob Ellingson's project usage",
    message: "What is the usage information for your project",
    validate: projectUsage => {
      if (projectUsage) {
        return true;
      } else {
        console.log('You need to enter your project usage informaton!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectContrib',
    default: "Rob Ellingson's contribution guidelines",
    message: "What are your contribution guidelines",
    validate: projectContrib => {
      if (projectContrib) {
        return true;
      } else {
        console.log('You need to enter your contribution guidelines!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectTest',
    default: "Rob Ellingson's testing",
    message: "How can users test your project",
    validate: projectTest => {
      if (projectTest) {
        return true;
      } else {
        console.log('Have to provide uses with your test instructions!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'projectLicense',
    default: "Unlicense",
    message: 'What is your project License?',
    choices: ['MIT', 'IBM', 'Unlicense']
  },
  {
    type: 'input',
    name: 'email',
    default: "awolrob@gmail.com",
    message: 'What is your email address? (Required)',
    validate: projectEmail => {
      if (projectEmail) {
        return true;
      } else {
        console.log('Please enter your email address for your Questions section!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    default: "https://github.com/awolrob",
    message: 'Enter your GitHub profile (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username for your Questions section!');
        return false;
      }
    }
  },

];
// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('Readme created! Check out README.MD in this directory!');
  });

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log('\nOrder receipt:');
    // console.log(JSON.stringify(answers, null, '  '));
    const readmeText = markdown(answers);

    writeToFile('./readme.md', readmeText);

  });

}

// Function call to initialize app
init();
