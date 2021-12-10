// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee')

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super()
    this.school = school
    this.role = role
  }
  getRole() {
    return `Intern`
  }
  getSchool() {
    return this.school
  }
}

module.exports = Intern