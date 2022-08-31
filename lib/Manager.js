const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email)
    this.officeNumber = 1
    this.role = "Manager"
  }
  returnOfficeNumber() {
    return this.officeNumber;
  }
  returnRole() {
    return this.role;
  }
 
}
module.exports = Manager;