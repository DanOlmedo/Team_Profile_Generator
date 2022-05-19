const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name,id,email,spec){

    super(name,id,email);

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