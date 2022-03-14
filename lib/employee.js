class Employee {
    constructor(name,id,email) {
        this.employeeName=name;
        this.employeeID=id;
        this.employeeEmail=email;
    }
    getName(){
        return this.employeeName;
    }
    getID(){
        return this.employeeID;
    }
    getEmail(){
        return this.employeeEmail;
    }
    getRole(){
        return 'Employee';
    }
}
module.exports= Employee;
