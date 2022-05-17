const Employees = require('./classes');
const inquirer = require('inquirer');
// inquirer.registerPrompt('list-input');
const fs = require('fs');

// const newMember = inquirer
// .prompt([
//   {
//     type: 'input',
//     message: 'Would you like to add a member to the team? (yes/no)',
//     name: 'new_mem',
//   },
// ]).then((response) =>{

//     if(response == 'yes'){
//     console.log('Please enter manager info');}
//  }
// );



const Manager = inquirer
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
    {
      type: 'list',
      name: 'Emp1_pos',
      message: 'Select position',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
  ])
  .then((response) =>
    console.log(response),
    // createManager(),
  );

function createManager(){
  console.log('test')
}

