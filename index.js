const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHTML = require("./dist/generate-html");
const inquirer = require("inquirer");
const fs = require("fs")

//Questions for the user
function employeeQuestions(Employees) {
  return inquirer
    .prompt([
    {
        type: "list",
        name: "role",
        message: "What is your role in the company?",
        choices: ["Manager", "Engineer", "Intern"]
        },
      { 
         type: "input", 
         name: "name", 
         message: "What is the employees name?" },
      {
        type: "input",
        name: "id",
        message: "What is the employees id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employees email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what is the employees office number? If you do not have an office number type: N/A",
      },
      {
        type: "input",
        name: "school",
        message: "What school did you go to? type: N/A if you are not an intern",
      },
      {
        type: "confirm",
        name: "Add",
        message: "Would you like to add another employee?",
        default: false,


      }
    ])
    //function for adding another new employee
    .then((newEmployee) => {
        
        const {Add} = newEmployee
      return Add ? employeeQuestions(Employees) : Employees
        
     
});
}
//supposed to send data to generateHTML file
employeeQuestions()
 .then((data)=> generateHTML(data))