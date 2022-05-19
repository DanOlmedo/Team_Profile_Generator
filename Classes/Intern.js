const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name,role,id,email,spec){

    super(name,role,id,email);

        this.spec = spec;
    
    }
    
    getSchool(){
        return this.spec;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;