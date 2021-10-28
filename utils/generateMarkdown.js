// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(responses) {
  //create table of contents conditionaly based on our client responses
  let tableContents = `## Table of contents`;

  if (responses.description !=='') {
    tableContents += `1. [Description](#description)`
  };
  if (responses.installation !=='') {
    tableContents += `2. [Installation](#installation)`
  };
  if (responses.usage !=='') {
    tableContents += `3. [Usage](#usage)`
  };
  if (responses.license !=='') {
    tableContents += `4. [License](#license)`
  };
  if (responses.credits !=='') {
    tableContents += `5. [Credits](#credits)`
  };
  if (responses.tests !=='') {
    tableContents += `6. [Tests](#tests)`
  };
  if (responses.questions !=='') {
    tableContents += `7. [Questions](#questions)`
  };

  //create a markdown (including the project name) for the portions that were selected above and that we'll include i out readme.md
  let selectedContent;

  if (responses.title !==''){
    selectedContent += `# Proyect Name is: <a name="title">${responses.title}</a>`
  };

  `---`

  selectedContent += tableContents;
    
  `## Project description <a name="description">${responses.description}</a>
  
  ---
  ## Installation <a name="installation">${responses.installation}</a>
  
  ---
  ## Usage <a name="usage">${responses.usage}</a>
  
  ---
  ## License <a name="license">${responses.license}</a>
  
  ---
  ## Credits <a name="credits">${responses.credits}</a>
  
  ---
  ## Tests <a name="tests">${responses.tests}</a>
  
  ---
  ## Questions <a name="questions">
  If you have any questions, please contact me to the information listed below.
  
  *Email: ${responses.email}
  *GitHub: [${responses.github}](https://github.com/${responses.github})
  </a>
  ---
  `
  return selectedContent;

  }
  module.exports = generateMarkdown;
  