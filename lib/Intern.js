const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    super(name, id, email);
    this.school = schoolName
    this.role = "Intern"
  }
  returnSchoolName() {
    return this.school
  }
  returnRole() {
    return this.role
  }
}

module.exports = Intern;