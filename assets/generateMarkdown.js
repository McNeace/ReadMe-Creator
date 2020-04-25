function generateMarkdown(data) {
var profilePic = `https://avatars2.githubusercontent.com/u/60047023?v=4`;
var repoName = "README-generator";
var badgeHTTPOne = `[![License: ${data.badgeChoice}](https://img.shields.io/badge/License-${data.badgeChoice}-blue.svg)](https://opensource.org/licenses/${data.badgeChoice})`;
var badgeHTTP = `
 https://img.shields.io/github/license/${data.githubUsername}/${repoName}`;
  return `
## Badge 
  ${badgeHTTPOne}
## Title
  * ${data.title}
## Description
  * ${data.projectDescription}
## Install
  * ${data.appInstall}
## Table of Contents
  * ${data.tableOfContents}
## Usage
  * ${data.usage}
## License
  * ${data.badgeChoice}
## Contributions
  * ${data.contributing}
## Tests
  * ${data.tests}
## Questions
  * Profile Pic
    - ${profilePic}
  * ${data.questions}
  * Username
    - ${data.githubUsername}
  * E-mail Address
    - ${data.userEmail}
## Badge
  * ${badgeHTTP}
`
;
}

module.exports = generateMarkdown;
  