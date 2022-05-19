const Manager = require("./Classes/Manager");
const Engineer = require('./Classes/Engineer');
const Intern = require('./Classes/Intern');
const cardGenerator = require('./HTML_generators/cardgen');
const fs = require('fs');
const inquirer = require('inquirer');

let managers;
let engineers;
let interns;
let employee_list = [];
let employee_array = [];

function generateCards(){
  
  for (let i = 1; i < employee_list.length; i++) {
      
      const card_template = 
      `
      <div class="card">
          <img src="./images/avatar_1.jpg" alt="Avatar">
              <div class="container" id="cardtext">
                  <h1>Name: ${employee_list[i].name}</h1>
                  <h1>Role: ${employee_list[i].role}</h1>
                  <h1>ID: ${employee_list[i].id}</h1>
                  <h1>Email: ${employee_list[i].email}</h1>
                  <h1>Of. number, GitHub or school:${employee_list[i].spec}</h1>
              </div>
      </div>
      `
      // console.log(card_template);

      employee_array.push(card_template);
      
  }

};

  function generateHTML(){

    generateCards();
    
    const html_template =
    
    `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Your team profile</title>
    </head>
    <body>
    
        <header id="header">
            <h1>Here is your team profile</h1>
        </header>
    
        <div class="main1">
    
        ${employee_array}
    
        </div>
    
        <a href="#header"><button id="btn1">Go to top</button></a> 
    
        <script src="./classes.js"></script>
    </body>
    </html>
    `;
    
    console.log(html_template);
    return data_test = html_template;
    
  }

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
      generateHTML();
      writeToFile("index.html",data_test);
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
      message: 'role',
      name: 'manager_role',
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

    managers = new Manager (response.manager_name,response.manager_role,response.manager_ID,response.manager_email,response.manager_office);
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
      message: 'Role',
      name: 'engineer_role',
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

    engineers = new Engineer (response.engineer_name,response.engineer_role,response.engineer_ID,response.engineer_email,response.engineer_github);
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
        message: 'Role',
        name: 'intern_role',
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

      interns = new Intern (response.intern_name,response.intern_role,response.intern_ID,response.intern_email,response.intern_school);
      employee_list.push(interns.getRole());
      employee_list.push(interns);
      roleSelection();
    }
    )};

roleSelection();



