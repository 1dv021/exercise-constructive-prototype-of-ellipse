'use strict';

let MostWanted = (function() {

  return {

    /**
     *
     */
    getNames: function*() {
      yield 'Bugsy Malone';
      yield 'Frank Nitti';
      yield 'Stephanie St. Clare';
      yield 'Al Capone';
      yield 'Helen Gills';
      yield 'Johnny Torrio';
      yield 'Bonnie Parker';
    },

    /**
     * Returns the initials from a name.
     *
     * @param {String} name The name to get the initials from.
     * @returns {String}
     */
    getInitials: function(name) {
      if (typeof name === 'string' && !name.trim() ||
          typeof name === 'undefined' ||
          name === null) {
        throw new Error('name must be a string that\'s not empty.');
      }

      return name.split(' ').reduce(function(prev, next) {
          return prev += next.charAt(0);
        }, '');
    }
  };
})();

module.exports = MostWanted;
