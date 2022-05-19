const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name,role,id,email,spec){

    super(name,role,id,email);

        this.spec = spec;
    
    }
    
    getOfficeNumber(){
        return this.spec;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;