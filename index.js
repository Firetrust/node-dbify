/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');

/**
 * Expose `dbify`.
 */

module.exports = {
  db: {},

  /**
   * Location of db files.
   *
   * @param {String} root
   * @api public
   */

  location: function location(root) {
    fs.readdirSync(root).forEach(store.bind(this, root));
  },

  /**
   * Get a db file.
   *
   * @param {String} name
   * @api public
   */

  get: function get(name) {
    return this.db[name];
  }
};

/**
 * Store db files in memory of `this.db`.
 *
 * @param {String} root
 * @param {String} file
 * @api private
 */

function store(root, file) {
  var db = require(path.resolve(root, file));
  var name = file.slice(0, -3);
  this.db[name] = db;
}
