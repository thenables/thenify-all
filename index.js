
var thenify = require('thenify')

module.exports = function (source, destination, methods) {
  if (!destination) {
    destination = {};
    methods = Object.keys(source)
  }

  if (Array.isArray(destination)) {
    methods = destination
    destination = {}
  }

  if (!methods) {
    methods = Object.keys(source)
  }

  methods.forEach(function (name) {
    // promisify only if it's a function
    if (typeof source[name] === 'function') destination[name] = thenify(name, source[name])
  })

  // proxy the rest
  Object.keys(source).forEach(function (name) {
    if (destination[name]) return
    destination[name] = source[name]
  })

  return destination
}
