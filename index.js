//Imports for application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

//function to gather the requests the user has for their logo
function getUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color name or hexadecimal code):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color name or hexadecimal code):',
    },
  ]);
}

//Creates and saves logo to an SVG file
function saveToSVGFile(svgContent) {
  const filePath = path.join(__dirname, 'examples', 'logo.svg');
  fs.writeFile(filePath, svgContent, (err) => {
    if (err) throw err;
    console.log(`Generated ${filePath}`);
  });
}

//The actual logo making process
function main() {
  getUserInput()
    .then((userInput) => {
      let shape;

      if (userInput.shape === 'Triangle') {
        shape = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor);
      } else if (userInput.shape === 'Circle') {
        shape = new Circle(userInput.text, userInput.textColor, userInput.shapeColor);
      } else if (userInput.shape === 'Square') {
        shape = new Square(userInput.text, userInput.textColor, userInput.shapeColor);
      }

      const svgContent = shape.render();
      saveToSVGFile(svgContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

//calls the main function to initialize app
main();
