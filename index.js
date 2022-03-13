//AS A manager
//I WANT to generate a webpage that displays my team's basic info
//SO THAT I have quick access to their emails and GitHub profiles

//GIVEN a command-line application that accepts user input
//WHEN I am prompted for my team members and their information
//THEN an HTML file is generated that displays a nicely formatted team roster based on user input
//WHEN I click on an email address in the HTML
//THEN my default email program opens and populates the TO field of the email with the address
//WHEN I click on the GitHub username
//THEN that GitHub profile opens in a new tab
//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
//WHEN I enter the team manager’s name, employee ID, email address, and office number
//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//WHEN I select the engineer option
//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//WHEN I select the intern option
//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//WHEN I decide to finish building my team
//THEN I exit the application, and the HTML is generated
const generateHTML =require('./src/generateHTML');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require('fs');
const dist = path.resolve(__dirname,'output');


const teamMember=[];
function app () {
    function getManager() {
        inquirer.prompt([
            {
                type:'input',
                name:'managerName',
                message:'What is the manager name?'
            },
            {
                type:'input',
                name:'mangerID',
                message:'what is the manager id?'
            },
            {
                type:'input',
                name:'managerEmail',
                message:'What is the manager email?'
            },
            {
                type:'input',
                name:'officeNumber',
                message:'what is the office number for the manager?'
            }
        ]).then (response => {
            const manager = new manager (response.managerName, response.managerEmail, response.managerID,response.officeNumber);
            teamMember.push(manager);
            addingNewmember();
        })
    }
    function getEmployee() {
        inquirer.prompt([
            {
                type:'input',
                name:'employeeName',
                message:'What is the employee name?'
            },
            {
                type:'input',
                name:'employeeID',
                message:'what is the employee id?'
            },
            {
                type:'input',
                name:'employeeEmail',
                message:'What is the employee email?'
            },
            {
                type:'input',
                name:'EmplofficeNumber',
                message:'what is the office number for the employee?'
            }
        ]).then (response => {
            const employee = new employee (response.employeeName, response.employeeEmail, response.employeeID,response.EmplofficeNumber);
            teamMember.push(employee);
            addingNewmember();
        })
    }
    function getEngineer() {
        inquirer.prompt([
            {
                type:'input',
                name:'EngineerName',
                message:'What is the engineer name?'
            },
            {
                type:'input',
                name:'EngineerID',
                message:'What is the Engineer ID?'
            },
            {
                type:'input',
                name:'Engineer email',
                message:'What is the Engineer email?'
            },
            {
                type:'input',
                name:'engineerGithub',
                message:'what is the Engineer github address?'
            }
            ]).then (response =>{
                const Engineer = new Engineer (response.EngineerName, response.EngineerEmail, response.EngineerID,response.EngineerGithub);
                teamMember.push(Engineer);
                addingNewmember();
            })
        }
function getIntern() {
    inquirer.prompt([
        {
            type:'input',
            name:'internName',
            message:'What is your intern name?'
        },
        {
            type:'input',
            name:'internID',
            message:'What is your intern ID?'
        },
        {
            type:'input',
            name:'intern email',
            message:'What is the intern email?'
        },
        {
            type:'input',
            name:'school',
            message:'which school does the intern go?'
        }
        ]).then (response =>{
            const intern = new intern (response.internName, response.internEmail, response.internID,response.github);
            teamMember.push(intern);
            addingNewmember();
        })
    }
    function addingNewmember(){
        inquirer.prompt([
            {
                type:'checkbox',
                name:'selectemployees',
                message:'which employee?',
                choices:[
                    'manager',
                    'engineer',
                    'intern'
                ]
            }
        ]).then(response=>{
            const role = response.selectemployees;
            if(role=='manager'){
                getManager();
            } else if (role=='engineer') {
                getEngineer();
            } else if (role=='intern'){
                getIntern();
            } 
        })
    }
}
app();