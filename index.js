const Employees = require('./classes');
const inquirer = require('inquirer');
// inquirer.registerPrompt('list-input');
const fs = require('fs');

console.log('Please enter manager info');

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
  ])
  .then((response) =>
    console.log(response)
  );

//   const Emp1 = inquirer.registerPrompt('list-input', require('./index'));
//   inquirer.prompt([
//        {
//      type: 'list-input',
//      name: 'Emp1_pos',
//      message: 'Select position',
//      choices: ['Manager', 'Engineer', 'Intern'],
//    }
//     ])
//    .then((response) =>
//     console.log(response)
//   );
