const generateHTML =require('./src/generateHTML');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const teamMember=[];


function getManager() {
       return inquirer.prompt([
            {
                type:"input",
                name:"managerName",
                message:"What is the manager's name?",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log ("Please enter the manager's name!");
                        return false; 
                    }
                }
            },
            {
                type:"input",
                name:"managerID",
                message:"what is the manager id?",
                validate: managerIDInput => {
                    if  (isNaN(managerIDInput)) {
                        console.log ("Please enter the manager's ID!")
                        return false; 
                    } else {
                        return true;
                    }
                }
            },
            {
                type:"input",
                name:"managerEmail",
                message:"What is the manager email?",
                validate: managerEmail => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
                    if (valid) {
                        return true;
                    } else {
                        console.log ("Please enter the manager's email!")
                        return false; 
                    }
                }
            },
            {
                type:"input",
                name:"managerOfficeNumber",
                message:"what is the office number for the manager?",
                validate : managerOfficeNumber => {
                    if  (isNaN(managerOfficeNumber)) {
                        console.log ("Please enter the manager's office number!")
                        return false; 
                    } else {
                        return true;
                    }
                }
            }
        ]).then (managerInput => {
           const {mangerName, managerID,managerEmail, managerOfficeNumber}=managerInput;
           const manager = new Manager (mangerName, managerID,managerEmail, managerOfficeNumber);

           teamMember.push(manager);
           console.log(manager);
        })
    };
    

    const getEmployee = () => {
        return inquirer.prompt ([
        {
            type: "list",
            name: "employeeRole",
            message: "Please choose your employee's role",
            choices: ["Manager",'Engineer', 'Intern']
        },
        {
            type: "input",
            name: "employeeName",
            message: "What's the name of the employee?", 
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter the employee's ID.",
            validate: employeeID=> {
                if  (isNaN(employeeID)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Please enter the employee's email.",
            validate: employeeEmail => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the employee's email!")
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "employeeGithub",
            message: "Please enter the employee's github username.",
            when: (input) => input.employeeRole === "Engineer"|| "Intern",
            validate: employeeGithub => {
                if (employeeGithub ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the intern's school",
            when: (input) => input.employeeRole === "Intern",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add more team members?",
            default: false
        }
    ])
    .then (employeeData => {
        let {employeeName,employeeID, employeeEmail, employeeRole, employeeGithub, internSchool, confirmAddEmployee} =employeeData;
        let employee ;
        if (employeeRole === "Engineer") {
            employee =new Engineer (employeeName, employeeID, employeeEmail, employeeGithub);
            console.log(employee);
        } else if (employeeRole ==="Intern"){
            employee = new Intern (employeeName,employeeID,employeeEmail,internSchool,employeeGithub);
            console.log(employee);
        } else if (employeeRole === "Manager"){
            employee = new Manager (employeeName, employeeID,employeeEmail, managerOfficeNumber);
        }
    })
};

const writeFile =data => {
    fs.writeFile("./dist/index.html",data,err => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Your team profile index.html file has been created.")
    }
})
};
getManager()
  .then(getEmployee)
  .then(teamMember => {
      console.log({teamMember})
    return generateHTML(teamMember);
  })
  .then(generateHTML => {
    return writeFile(generateHTML);
  })
  .catch(err => {
 console.log(err);
  });

