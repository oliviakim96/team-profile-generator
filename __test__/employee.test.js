const Employee= require("../lib/Employee");

test("Ability to set name using constructor function",()=> {
    const name = "Nara Shin";
    const employee = new Employee (name);
    expect (employee.getName()).toBe(name);
});

test("Ability to set the user ID using constructor function", ()=> {
    const id ="1";
    const employee = new Employee("Nara Shin",id,"narashin@email.com");
    expect(employee.getID()).toBe(id);
});
test("Running getEmail() should return the supplied email", ()=>{
    const email="narashin@email.com";
    const employee= new Employee("Nara Shin",1,email);
    expect(employee.getEmail()).toBe(email);
});
test("Running getRole() should return 'Employee'", ()=>{
    const role="Employee";
    const employee=new Employee ("Nara Shin", 1, "narashin@email.com");
    expect(employee.getRole()).toBe(role);
});