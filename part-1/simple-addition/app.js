/**
 * The starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

// Get the module "calc". Using ./src/ to indicate that it is
// placed in a subdirectory of this directory.
const calc = require('./src/calc')

// Call the function "addNumber" in the calc module without
// any arguments and save the result in a new local variable.
let result = calc.addNumbers()

// Print the result to the terminal (console).
console.log(result)
