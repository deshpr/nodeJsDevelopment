var internal_counter = 0;

function count_call(){
    ++internal_counter;
    console.log('You have made ' + internal_counter + '   calls :)')
}

// make it available to  code outside.
module.exports =  = count_call