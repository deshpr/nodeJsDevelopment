var path = require('path')
var fs = require('fs')
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib')
var simple = require(lib + '/simple_math.js')
var advanced = require(lib + '/advanced_math.js')
module.exports = {
    addition: simple.add,
    subtraction: simple.subtract,
    multiplication: advanced.multiply,
    division: advanced.divide,
    fibonacci: advanced.fibonacci
}