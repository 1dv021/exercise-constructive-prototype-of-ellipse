/**
 * The starting  point of the application.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const determinator = require('./src/determinator')

console.log(determinator.tellType('Hasta la vista, baby.'))
console.log(determinator.tellType(true))
console.log(determinator.tellType(42))
console.log(determinator.tellType({}))
console.log(determinator.tellType([]))
console.log(determinator.tellType(null))
console.log(determinator.tellType(function () {}))
console.log(determinator.tellType())
