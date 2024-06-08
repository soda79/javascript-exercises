const fibonacci = function(position) {
    let fibArray = [];
    let newPosition = parseInt(position);
    
    if(newPosition < 0){
        return "OOPS";
    }

    for(let i = 0; i <= newPosition; i++){
       
        if(i < 2){
            fibArray.push(i);
        }
        else if(i == 2){
            fibArray.push(1);
        }
        else{
        fibArray.push((fibArray[i-1]) + fibArray[i-2])
        }
    }
    return fibArray[newPosition];
};

// Do not edit below this line
module.exports = fibonacci;
