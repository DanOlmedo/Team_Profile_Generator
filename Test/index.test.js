const Employee = require("../Classes/Employee");
const Manager = require("../Classes/Manager");
const Engineer = require("../Classes/Engineer");
const Intern = require("../Classes/Intern");


describe("Employee class", () => {

  it("Employee class is instantiated with expected constructors", () => {
    let testEmployee = new Employee("TestName","TestRole",1,"TestEmail")
    expect(testEmployee.name).toBe("TestName"),
    expect(testEmployee.role).toBe("TestRole"),
    expect(testEmployee.id).toBe(1),
    expect(testEmployee.email).toBe("TestEmail")
  });

  it("Has working methods for getting the instance info", () => {
    let testEmployee = new Employee("TestName","TestRole",1,"TestEmail")
    expect(testEmployee.getName()).toBe("TestName"),
    expect(testEmployee.getId()).toBe(1),
    expect(testEmployee.getEmail()).toBe("TestEmail"),
    expect(testEmployee.getRole()).toBe("Employee")
  });

});

describe("Manager class", () => {

  it("Manager class is instantiated with expected constructors", () => {
    let testManager = new Manager("TestName","TestRole",1,"TestEmail")
    expect(testManager.name).toBe("TestName"),
    expect(testManager.role).toBe("TestRole"),
    expect(testManager.id).toBe(1),
    expect(testManager.email).toBe("TestEmail")
  });

  it("Has working methods for getting the instance info", () => {
    let testManager = new Manager("TestName","TestRole",1,"TestEmail")
    expect(testManager.getName()).toBe("TestName"),
    expect(testManager.getId()).toBe(1),
    expect(testManager.getEmail()).toBe("TestEmail"),
    expect(testManager.getRole()).toBe("Manager")
  });

});

describe("Engineer class", () => {

  it("Engineer class is instantiated with expected constructors", () => {
    let testEngineer = new Engineer("TestName","TestRole",1,"TestEmail")
    expect(testEngineer.name).toBe("TestName"),
    expect(testEngineer.role).toBe("TestRole"),
    expect(testEngineer.id).toBe(1),
    expect(testEngineer.email).toBe("TestEmail")
  });

  it("Has working methods for getting the instance info", () => {
    let testEngineer = new Engineer("TestName","TestRole",1,"TestEmail")
    expect(testEngineer.getName()).toBe("TestName"),
    expect(testEngineer.getId()).toBe(1),
    expect(testEngineer.getEmail()).toBe("TestEmail"),
    expect(testEngineer.getRole()).toBe("Engineer")
  });

});

describe("Intern class", () => {

  it("Intern class is instantiated with expected constructors", () => {
    let testIntern = new Intern("TestName","TestRole",1,"TestEmail")
    expect(testIntern.name).toBe("TestName"),
    expect(testIntern.role).toBe("TestRole"),
    expect(testIntern.id).toBe(1),
    expect(testIntern.email).toBe("TestEmail")
  });

  it("Has working methods for getting the instance info", () => {
    let testIntern = new Intern("TestName","TestRole",1,"TestEmail")
    expect(testIntern.getName()).toBe("TestName"),
    expect(testIntern.getId()).toBe(1),
    expect(testIntern.getEmail()).toBe("TestEmail"),
    expect(testIntern.getRole()).toBe("Intern")
  });

});

describe("Intern class", () => {

  it("Intern class is instantiated with expected constructors", () => {
    let testIntern = new Intern("TestName","TestRole",1,"TestEmail")
    expect(testIntern.name).toBe("TestName"),
    expect(testIntern.role).toBe("TestRole"),
    expect(testIntern.id).toBe(1),
    expect(testIntern.email).toBe("TestEmail")
  });

});
