

const removeFromArray = function(array, ...num) {
    let newArray = [array];
    for(let i = 0; i < array.length; i++){
        if(num[i] == array[i]){
            newArray.splice(num[i], 1);
        }
    }
    console.log(newArray);
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

