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

function generateMarkdown(responses, githubLink) {
  `# Proyect Name is: ${responses.title}
  
  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Credits](#credits)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  ## Project description <a name="description"></a>
  ${responses.description}
  
  ## Installation <a name="installation"></a>
  ${responses.installation}
  
  ## Usage <a name="usage"></a>
  ${responses.usage}
  
  ## License <a name="license"></a>
  ${responses.license}
  
  ## Credits <a name="credits"></a>
  ${responses.credits}
  
  ## Tests <a name="tests"></a>
  ${responses.tests}
  
  ## Questions <a name="questions"></a>
  If you have any questions, please contact me to the information listed below.
  
  *Email: ${responses.email}
  *GitHub: ${githubLink}
  
  `
  }
  module.exports = generateMarkdown;
  