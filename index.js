const Employees = require('./classes');
const inquirer = require('inquirer');
const fs = require('fs');

let manager1;
let engineer1;
let intern1;

async function roleSelection() {

const selectedRole = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Select employee role',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
    ]);

   if (selectedRole.role == 'Manager') {
      managerInfo();
   }
   else if (selectedRole.role == 'Engineer') {
     engineerInfo();
   }
   else if (selectedRole.role == 'Intern') {
    internInfo();
  }
}

async function managerInfo(){

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
  .then((response) =>
  console.log(response),
)
.catch((e) => {
  console.log(e, "err")
});
}

async function engineerInfo(){

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
  .then((response) =>
  console.log(response),
)
.catch((e) => {
  console.log(e, "err")
});
}

async function internInfo(){

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
    .then((response) =>
      console.log(response),
    )
    .catch((e) => {
      console.log(e, "err")
    });
  }

  roleSelection();