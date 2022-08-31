const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
    this.role = "Engineer"
  }
  returnGitHub() {
    return this.github
  }
  returnRole() {
    return this.role
  }
}
module.exports = Engineer;