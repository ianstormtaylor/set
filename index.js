
/**
 * Set a `prop` on an `obj` to a `value`, by direct access, named
 * getter/setter or via `set`.
 *
 * @param {Object} obj
 * @param {String} prop
 * @param {Mixed} value
 */

module.exports = function set (obj, prop, value) {

  // named getter/setter
  if ('function' === typeof obj[prop]) {
    return obj[prop](value);
  }

  // set method
  if ('function' === typeof obj.set) {
    return obj.set(prop, value);
  }

  // plain object
  return obj[prop] = value;
};