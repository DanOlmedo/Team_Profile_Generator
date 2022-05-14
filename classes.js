//Declare class prototype for employees

class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName(){
        console.log(this.name)
    }

    getId(){
        console.log(this.id)
    }

    getEmail(){
        console.log(this.email)
    }

    getRole(){
        console.log(this.role)
    }
}

const test = new Employee('Dan','123','mailtest')

test.getName();
test.getId();
test.getEmail();
test.getRole();
console.log('    ')

class Manager extends Employee {

    constructor(name,id,email,officeNumber){

    super();

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
    
    getOfficeNumber(){
        console.log(this.officeNumber)
    }
}

const test2 = new Manager('Den','456','mailtest2','off1')

test2.getName();
test2.getId();
test2.getEmail();
test2.getRole();
test2.getOfficeNumber();
console.log('    ')

class Engineer extends Employee {

    constructor(name,id,email,github){

    super();

    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = 'Engineer'
    }

    getGithub(){
        console.log(this.github)
    }

}

const test3 = new Engineer('Don','789','mailtest3','gitTest')

test3.getName();
test3.getId();
test3.getEmail();
test3.getRole();
test3.getGithub();
console.log('    ')

class Intern extends Employee {

    constructor(name,id,email,school){

    super();

    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = 'Intern'
    }

    getSchool(){
        console.log(this.school)
    }

}

const test4 = new Intern('Din','111','mailtest4','UIA')

test4.getName();
test4.getId();
test4.getEmail();
test4.getRole();
test4.getSchool();
console.log('    ')

module.exports = Employee, Manager, Engineer, Intern;