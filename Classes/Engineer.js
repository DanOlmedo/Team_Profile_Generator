const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name,id,email,spec){

    super(name,id,email);

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