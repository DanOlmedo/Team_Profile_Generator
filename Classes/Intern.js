const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name,id,email,spec){

    super(name,id,email);

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