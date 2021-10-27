// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const githubInfo = require('./github');
const generateMarkdown = require ('./utils/generateMarkdown');
const util = require('util');
const path = require('path');
// const githubUrl = "github.com/"


// TODO: Create an array of questions for user input
const questions = [

        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Give a brief description about your application',
            name: 'description',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Write the steps to install the application',
            name: 'installation',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Write the instructions and examples for the correct use of your application',
            name: 'usage',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'list',
            message: 'Select the license of your application',
            choices: ['GNU GPLv3 License', 'MIT License', 'Apache License 2.0', 'N/A'],
            name: 'license',
            validate: (value) => { if (value) { return true; } else { return "Select one to continue"; } },
        },
        {
            type: 'input',
            message: 'Mention the collaborators of this application or who are the creidts of this application for',
            name: 'credits',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Have you done any test to this applicaton? If yes, mention them and give example of how to run them',
            name: 'tests',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Enter you GitHub username',
            name: 'github',
            validate: (value) => { if (value) { return true; } else { return "Enter your github username to continue"; } },
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email',
            validate: (value) => { if (value) { return true; } else { return "Enter email to continue"; } },
        },
    ]


// const githubCompleteUrl = "https://github.com/" + ${github};



// const template = ({title, description, installation, usage, license, credits, tests, github, email,}) =>
// `# Proyect Name is: ${title}

// ## Table of contents
// 1. [Description](#description)
// 2. [Installation](#installation)
// 3. [Usage](#usage)
// 4. [License](#license)
// 5. [Credits](#credits)
// 6. [Tests](#tests)
// 7. [Questions](#questions)

// ## Project description <a name="description"></a>
// Some introduction text, formatted in heading 2 style

// ## Some paragraph <a name="paragraph1"></a>
// The first paragraph text

// ### Sub paragraph <a name="subparagraph1"></a>
// This is a sub paragraph, formatted in heading 3 style

// ## Another paragraph <a name="paragraph2"></a>
// The second paragraph text
// `;

// // Bonus using writeFileSync as a promise
// const init = () => {
//   promptUser()
//   // Use writeFileSync method to use promises instead of a callback function
//     .then(({
//         title,
//         description,
//         installation,
//         usage,
//         license,
//         credits,
//         tests,
//         github,
//         email,
//     }) => fs.writeFileSync('index.html', template(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();

// TODO: Create a function to write README file
function writeInFile (fileName, data){
    fs.writeFile(fileName,data, err => {
        if (err) {
            return console.log(error);
        } else {
            console.log("Your README is being generated")
        }
    });
}
const writeFileAsync = util.promisify(writeInFile);

// TODO: Create a function to initialize app
async function init() {
    // try{
        inquirer.prompt(questions).then((responses) => {
            console.log("List of responses: ", responses);
            
            // const githubLink = githubInfo.genLink(responses);
            // const markdown = generateMarkdown(responses,githubLink);
            fs.writeFile('SampleREADME.md', generateMarkdown(responses), (err) => {
                if(err) throw err

            });
        })


    //     const githubLink = await githubInfo.genLink(responses);
    //     console.log("Your github link is: ", githubLink);

    //     const markdown = generateMarkdown(responses,githubLink);
    //     console.log(markdown);

    //     await writeFileAsync('SampleREADME.md', markdown);
    // } catch (error) {
    //     console.log(error);
    // }
}

// Function call to initialize app
init();