const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let newEmployees = []
// Write code to use inquirer to gather information about the development team members,
function runQuestions() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name: '
      },
      {
        type: 'input',
        name: 'id',
        message: 'id: '
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email: '
      },
      {
        type: 'list',
        name: 'role',
        message: 'Role: ',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
    ])
  .then((answer) => {
    // if engineer role selected, prompt for github name //
        if (answer.role === 'Engineer') {
    inquirer.prompt({
      type: 'input',
      name: 'github',
      message: 'Github Username: ',
    })
    // Create new Engi //
    .then(newAnswer => {
      newEmployees.push(new Engineer(answer.name, answer.id, answer.email, newAnswer.github))
    continuity();
    })
    // if intern selected prompt user for school name //
  } if (answer.role === 'Intern') {
    inquirer.prompt({
      type: 'input',
      name: 'school',
      message: 'School: ',
    })
    // create new intern //
    .then(newAnswer => {
      newEmployees.push(new Intern(answer.name, answer.id, answer.email, newAnswer.school))
      continuity();
    })
    // if manager role selected prompt user for offfice number //
  } if (answer.role === 'Manager') {
    inquirer.prompt({
      type: 'input',
      name: 'officeNumber',
      message: 'Office Number: ',
    })
    // create new manager //
    .then(newAnswer => {
      newEmployees.push(new Manager(answer.name, answer.id, answer.email, newAnswer.officeNumber))
      continuity();
  });
}
})
}




function continuity() {
  inquirer.prompt({
    type: 'confirm',
    name: 'complete',
    message: 'Are You Finished?'
  }).then((answer) => {
    if (answer.complete) {
      // After the user has input all employees desired, call the `render` function (required
     // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!
      render(newEmployees)
      return
    } else {
      runQuestions();
    }
  })
}

function writeToFile(fileName, data) {
  fs.writeFile('team.html', , err => {
    if (err) {
      return console.log(err);
    }

    console.log("File written successfully!")
  });
}


runQuestions();



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```