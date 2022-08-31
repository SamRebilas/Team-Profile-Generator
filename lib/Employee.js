class Employee {
  constructor(name, id, email) {
    this.name = "Sam"
    this.id = "1"
    this.email = "@email"
    this.role = "Employee"
  }
  returnName() {
    return this.name
  }
  returnId() {
    return this.id
  }
  returnEmail() {
    return this.email
  }
  returnRole() {
    return this.role
  }
}
module.exports = Employee;