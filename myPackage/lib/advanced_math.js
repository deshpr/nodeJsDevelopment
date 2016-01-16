
var call_counter  = require('./call_counter')

exports = module.exports = {}

function multiply(x,y){
    call_counter();
    return x * y;
}

function divide(x,y){
    call_counter();
    return x/y;
}

function fibo(count){
    call_counter();
    return private_fibo_counter(count);    
}

function private_fibo_counter(count, counter, first, second){
    if(count == 0) return 0;
    if(counter == undefined)
    {
        first = 1;
        second = 2;
    }
    var result = first + second;
    private_fibo_counter(count, counter++,second, result)
    return result
}

exports = {
    multiply: multiply,
    divide: divide,
    fibonacci: fibo
}





