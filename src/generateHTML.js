// create Manager card
const generateManager = function (Manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Manager.managerName}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Manager.managerID}</p>
                <p class="email">Email: <a href="mailto:${Manager.managerEmail}">${Manager.managerEmail}</a></p>
                <p class="office">Office Number: ${Manager.managerOfficeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (Engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Engineer.engineerName}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Engineer.engineerID}</p>
                <p class="email">Email: <a href="mailto:${Engineer.engineerEmail}">${Engineer.engineerMail}</a></p>
                <p class="github">Github: <a href="https://github.com/${Engineer.engineerGithub}">${Engineer.engineerGithub}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (Intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Intern.internName}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Intern.internID}</p>
                <p class="email">Email:<a href="mailto:${Intern.internEmail}">${Intern.internEmail}</a></p>
                <p class="school">School: ${Intern.internSchool}</p>
            </div>
    </div>
</div>
    `
};

generateHTML = (data) => {
 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const Employee = data[i];
        const role = Employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(Employee);

            pageArray.push(managerCard);
        }

         if (role === 'Engineer') {
            const engineerCard = generateEngineer(Employee);

            pageArray.push(engineerCard);
        }

           if (role === 'Intern') {
            const internCard = generateIntern(Employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

    const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

module.exports = generateHTML; 