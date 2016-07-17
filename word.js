var inquirer = require('inquirer');

function Movie() {
    this.the = "the",
    this.lord = "lord",
    this.of = "of",
    this.the = "the",
    this.rings = "rings"
}

//CREATES THE printInfo METHOD AND APPLIES IT TO ALL Programmer OBJECTS
Programmer.prototype.printInfo = function() {
    console.log("the: " + this.the, + "lord: ", this.lord, "of: ", this.of );
}


