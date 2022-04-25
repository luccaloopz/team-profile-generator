const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateMyTeam = require('./src/generatehtml')

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
    },
    
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
    },
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
        name: 'internSchool'
    },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't have any more team members."],
        name: 'internChoice'
    }
];

myTeam = [];

function managerQuestions() {
    inquirer
    .prompt(questionsManager)
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
        myTeam.push(manager);
        choosingOtherTeamMembers(answers);
    });
};

function choosingOtherTeamMembers(answers) {
    if (answers.managerChoice === 'Engineer' || answers.engineerChoice === 'Engineer' || answers.internChoice === 'Engineer') {
        inquirer
        .prompt(questionsEngineer)
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitUser);
            myTeam.push(engineer);
            choosingOtherTeamMembers(answers);
        })
    } else if (answers.managerChoice === 'Intern' || answers.engineerChoice === 'Intern' || answers.internChoice === 'Intern') {
        inquirer
        .prompt(questionsIntern)
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            myTeam.push(intern);
            choosingOtherTeamMembers(answers);
        });
    } else {
        console.log(myTeam);
        const data = generateMyTeam(myTeam);
        return generateHTML(data);
    };
};

function generateHTML(data) {
//create a funtion here to write the html file using fs.writeFile 
    fs.writeFile("./dist/generated.html", data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your team has been built!");
        };
    });
};

managerQuestions();  