var call_counter = require('./call_counter')
exports = module.exports ={}


function add(x, y){
    call_counter();
    return x + y;
}

function subtract(x,y){
    call_counter();
    return x - y;
}

exports = {
    add: add,
    subtract: subtract
}
