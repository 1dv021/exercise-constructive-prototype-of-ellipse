/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict';

// Get the module "calc" (using ./ to indicate it's located under the directory of this file).
let calc = require('./src/calc');

// Call the function "addNumber" in the calc module without any arguments and save the result in a new local variable.
let sum = calc.addNumbers();

// Print the result to the terminal (console).
console.log(sum);

