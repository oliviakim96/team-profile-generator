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

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs= require('fs');
const output=path.resolve(__dirname,'output');
const outputpath=path.join(output,'teamprofile.html');
const render=require('./lib/htmlRenderer');


const teamMember=[];
function app () {
    function getManger () {
        inquirer.prompt([
            {
                type:'input',
                name:'managerName',
                message:'What is your manager name?'
            },
            {
                type:'input',
                name:'mangerID',
                message:'what is your manager id?'
            }
            {
                type:'input',
                name:'manager email',
                message:'What is your manager email?'
            }
            {
                type:'input',
                name:'officeNumber',
                message:'office number for manager?'
            }
        ]).then (response =>{
            
        })
    }
}