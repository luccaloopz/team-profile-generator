const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
        return myTeam;
    };
};

function generateHTML(data) {
//create a funtion here to write the html file using fs.writeFile 
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your team has been built!");
        };
    });
};

managerQuestions()
.then(myteam => {
    // return back what you get from taking the myTeam array of employee objects and pasing it through the generatehtml.js file to actually dynamically create the html page
}).then(templateHtml => {
    // return the template literal of what the newly dynamically generated html page looks like and pass it through the function right above that uses fs.writefile to create the html page.
}).catch(err => {
    throw err;
});