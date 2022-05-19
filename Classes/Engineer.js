const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name,role,id,email,spec){

    super(name,role,id,email);

        this.spec = spec;
    
    }
    
    getGithub(){
        return this.spec;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;