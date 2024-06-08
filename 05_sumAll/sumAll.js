
const sumAll = function(start, end) {
    let myArray = [0];
    let num = 0;

    if( (Math.sign(start) === -1) ||(Math.sign(end) === -1) ||
    ((typeof start) != (typeof 1)) || ((typeof end) != (typeof 1))){
        return 'ERROR'
    }
    else if(start > end){
        for(let i = end; i <= start; i++){
            myArray.push(i);
            num += myArray[i];
        }
    }
    else{
        for(let i = start; i<= end; i++){
            myArray.push(i);
            num += myArray[i];
        }
    }
    return num;
}

// Do not edit below this line
module.exports = sumAll;
