const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const questionsManager = [
    {
        type: 'input',
        message: "Please enter the team manager's name.",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "Please enter the team manager's employee ID.",
        name: 'managerID'
    },
    {
        type: 'input',
        message: "Please enter the team manager's email address.",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "Please enter the team manager's office number.",
        name: 'managerOfficeNum'
    },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't have any more team members."],
        name: 'managerChoice'
    }
];

const questionsEngineer = [
    {
        type: 'input',
        message: "Please enter the engineer's name.",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "Please enter the engineer's employee ID.",
        name: 'engineerID'
    },
    {
        type: 'input',
        message: "Please enter the engineer's email address.",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "Please enter the engineer's GitHub username.",
        name: 'engineerGitUser'
    },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't have any more team members."],
        name: 'engineerChoice'
    }
];

const questionsIntern = [
    {
        type: 'input',
        message: "Please enter the intern's name.",
        name: 'internName'
    },
    {
        type: 'input',
        message: "Please enter the intern's employee ID.",
        name: 'internID'
    },
    {
        type: 'input',
        message: "Please enter the intern's email address.",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "Please enter the intern's school.",
        name: 'internGitUser'
    },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't have any more team members."],
        name: 'internChoice'
    }
];