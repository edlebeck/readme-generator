// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``;
  } else if ( license === 'GNU AGPLv3') {
    return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
  } else if ( license === 'GNU GPLv3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if ( license === 'GNU LGPLv3') {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
  } else if ( license === 'Mozilla Public License 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else if ( license === 'Apache License 2.0') {
    return `![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if ( license === 'MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if ( license === 'Boost Software License 1.0') {
    return `![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if ( license === 'The Unlicense') {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license === 'GNU AGPLv3') {
    return `[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if ( license === 'GNU GPLv3') {
    return `[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if ( license === 'GNU LGPLv3') {
    return `[LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if ( license === 'Mozilla Public License 2.0') {
    return `[MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else if ( license === 'Apache License 2.0') {
    return `[Apache License 2.0]((https://opensource.org/licenses/Apache-2.0))`;
  } else if ( license === 'MIT License') {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if ( license === 'Boost Software License 1.0') {
    return `[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if ( license === 'The Unlicense') {
    return `[Unlicense](http://unlicense.org/)`;
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `## License
  ${renderLicenseLink(license)}   
    `
  }
};

function renderLicenceTOC(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `[License](#license)`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return [data.title + 'README.md', `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenceTOC(data.license)}
  - [Contributions](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Contact Information:
  - [Github page](https://github.com/${data.userName})
  - ${data.email}
`];

}

module.exports = generateMarkdown;
