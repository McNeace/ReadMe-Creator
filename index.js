const inquirer = require("inquirer");
const api = require("./assets/api");
const path = require("path");
const generateMarkdown = require("./assets/generateMarkdown");
const fs = require('fs');
const questions = [
   {
      type: "input",
      name: "githubUsername",
      message: "What is your Github username?"

   },

   {
      type: "input",
      name: "userEmail",
      message: "What is your e-mail address?"

   },

   {
      type: "input",
      name: "title",
      message: "What is the name of your application?"

   },

   {
      type: "input",
      name: "projectDescription",
      message: "Describe the app."

   },

   {
      type: "input",
      name: "appInstall",
      message: "How to install the app?"

   },

   {
      type: "input",
      name: "tableOfContents",
      message: "What is your Table of Contents?"

   },

   {
      type: "input",
      name: "usage",
      message: "How is the app used?"

   },

   {
      type: "checkbox",
      name: "badgeChoice",
      message: "Which license do you prefer?",
      choices: [
         "ISC",
         "MIT"
      ],

   },

   {
      type: "input",
      name: "contributing",
      message: "How can other others contribute to the app?"

   },
   


   {
      type: "input",
      name: "tests",
      message: "What tests run to resolve bugs/issues?"

   },

   {
      type: "input",
      name: "questions",
      message: "How can users report issues or give feedback?"
   }
];

function createBadge(license) {
   return `https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
}

function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(__dirname, fileName), data)
}

console.log(__dirname)

function init() {
   inquirer.prompt(questions).then(function (data) {
      api.getUser(data.githubUsername).then(response => {
         console.log(response.data.avatar_url);
         console.log(createBadge(data.badgeChoice));
         writeToFile("README.md", generateMarkdown(data));
      });
   });
}

init();