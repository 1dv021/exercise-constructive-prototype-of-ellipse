/**
 * Repository namespace.
 *
 * @namespace Repository
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict';

let path = require('path');
let fs = require('fs');

let Repository = (function() {

  /**
   * Returns an array of team objects.
   *
   * @returns {Object[]} An array of team objects.
   */
  let loadTeams =  function() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/teams.json')));
  };

  return {
    loadTeams
  };
})();

module.exports = Repository;
