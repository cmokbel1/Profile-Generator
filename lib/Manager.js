// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber, role) {
    super()
    this.officeNumber = officeNumber
    this.role = role
  }
  getRole() {
    return this.role
  }
  getOfficeNumber() {
    return this.officeNumber
  }
}

module.exports = Manager