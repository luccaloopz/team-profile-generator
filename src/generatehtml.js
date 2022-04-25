function generatehtml(memberCards) {
    return `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Builder</title>
    </head>

    <body class="container-fluid">
        <header class="d-flex align-items-center justify-content-center rounded">
            <h1>My Team</h1>
        </header>

        <main>
            <div class="container">
                <div class="row">
                    <div class="row d-flex justify-content-center">
                        ${memberCards}
                    </div>
                </div>
            </div>
        </main>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="../index.js"></script>
    </body>
</html>`;

};

function generateManagerCard(manager) {
    return `
<div class="card bg-light m-4 shadow" style="width: 18rem;">
    <div class="row memberCardHeader rounded">
        <div class="text-white fs-3">${manager.name}</div>
        <div class="text-white fs-4">Manager</div>
    </div>
    <div class="card-body rounded">
        <div class="card border">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`;
};

function generateEngineerCard(engineer) {
    return `
<div class="card bg-light m-4 shadow" style="width: 18rem;">
    <div class="row memberCardHeader rounded">
        <div class="text-white fs-3">${engineer.name}</div>
        <div class="text-white fs-4">Engineer</div>
    </div>
    <div class="card-body rounded">
        <div class="card border">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">GitHub: ${engineer.gitUser}</li>
            </ul>
        </div>
    </div>
</div>`;
};

function generateInternCard(intern) {
    return `
<div class="card bg-light m-4 shadow" style="width: 18rem;">
    <div class="row memberCardHeader rounded">
        <div class="text-white fs-3">${intern.name}</div>
        <div class="text-white fs-4">Intern</div>
    </div>
    <div class="card-body rounded">
        <div class="card border">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>`;
};

function createTeamMemberCards(myTeam) {
    // this function will take the myTeam array and loop through it to create the various team member cards, append them to the generatehtml() function as one template literal and return that final template literal

    teamArray = [];

    for(let i = 0; i < myTeam.length; i++) {
        const role = myTeam[i].getRole();

        if (role === "Manager") {
            teamArray.push(generateManagerCard(myTeam[i]))
        } else if (role === "Engineer") {
            teamArray.push(generateEngineerCard(myTeam[i]))
        } else if (role === "Intern") {
            teamArray.push(generateInternCard(myTeam[i]))
        };
    };

    const memberCards = teamArray.join('');
    const generatedTeam = generatehtml(memberCards);
    return generatedTeam;
};

module.exports = createTeamMemberCards;