const Employee= require("../lib/employee");

test("Ability to set name using constructor function",()=> {
    const name "Nara Shin";
    const Employee =new Employee (name);
    expect (Employee.name).toBe(name);
});

test("Ability to set the user ID using constructor function", ()=> {
    const id ="1";
    const Employee=new Employee("Nara Shin",id,"narashin@email.com");
    expect(Employee.id).toBe(id);
});
test("Running getEmail() should return the supplied email", ()=>{
    const email="arberduka@email.com";
    const Employee= new Employee("Nara Shin",1,email);
    expect(Employee.getEmail()).toBe(email);
});
test("Running getRole() should return 'Employee'", ()=>{
    const role="Employee";
    const Employee=new Employee ("Nara Shin", 1, "narashin@email.com");
    expect(Employee.getRole()).toBe(role);
});