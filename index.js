const Manager = require("./Class_files/Manager");
const Engineer = require('./Class_files/Engineer');
const Intern = require('./Class_files/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

let managers;
let engineers;
let interns;
let employee_list = [];

function roleSelection() {

inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Would you like to add another employee or exit?',
        choices: ['Manager', 'Engineer', 'Intern','Exit'],
      },
    ]).then((choice) => {

    if (choice.role == 'Manager') {
        managerInfo();
    }
    else if (choice.role == 'Engineer') {
       engineerInfo();
    }
    else if (choice.role == 'Intern') {
      internInfo();
    }
    else if (choice.role == 'Exit') {
      //Generate the html file here
      console.log(`This is your team: ${JSON.stringify(employee_list)}`);
    }
  });
}

function managerInfo(){

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Name',
      name: 'manager_name',
    },
    {
        type: 'input',
        message: 'Employee ID',
        name: 'manager_ID',
    },
    {
        type: 'input',
        message: 'Email',
        name: 'manager_email',
    },
    {
        type: 'input',
        message: 'Office number',
        name: 'manager_office',
    },
  ])
  .then((response) => {

    managers = new Manager (response.manager_name,response.manager_ID,response.manager_email,response.manager_office);
    employee_list.push(managers.getRole());
    employee_list.push(managers);
    roleSelection();
  }
  )};

function engineerInfo(){

 inquirer
  .prompt([
    {
      type: 'input',
      message: 'Name',
      name: 'engineer_name',
    },
    {
        type: 'input',
        message: 'Employee ID',
        name: 'engineer_ID',
    },
    {
        type: 'input',
        message: 'Email',
        name: 'engineer_email',
    },
    {
        type: 'input',
        message: 'Github',
        name: 'engineer_github',
    },
  ])
  .then((response) => {

    engineers = new Engineer (response.engineer_name,response.engineer_ID,response.engineer_email,response.engineer_github);
    employee_list.push(engineers.getRole());
    employee_list.push(engineers);
    roleSelection();   
  }
  )};

function internInfo(){

  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Name',
        name: 'intern_name',
      },
      {
          type: 'input',
          message: 'Employee ID',
          name: 'intern_ID',
      },
      {
          type: 'input',
          message: 'Email',
          name: 'intern_email',
      },
      {
          type: 'input',
          message: 'School',
          name: 'intern_school',
      },
    ])
    .then((response) => {

      interns = new Intern (response.intern_name,response.intern_ID,response.intern_email,response.intern_school);
      employee_list.push(interns.getRole());
      employee_list.push(interns);
      roleSelection();
    }
    )};

roleSelection();

function writeToFile(fileName,data) {
   fs.writeFile(fileName,data,function(err){
     console.log(data)
     if (err) {
       return console.log(err)
     }
     else {
       console.log("Succes")
     }
   })
}

