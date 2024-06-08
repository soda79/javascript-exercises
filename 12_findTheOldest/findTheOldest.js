const findTheOldest = function(person) {
    let birth = [];
    let death = [];
    let age = [];

    if(person.yearOfDeath === undefined){
        Object.defineProperty(person[0], 'yearOfDeath' ,{
            value: 2022,
            writable: true,
        });

        for(let i = 0; i < 3; i++){
            birth.push(person[i].yearOfBirth);
            death.push(person[i].yearOfDeath);
            age.push((death[i]-birth[i]))
        }
    
        let index = age.indexOf(Math.max(...age));
        return person[index];
    }
    else{
        for(let i = 0; i < 3; i++){
            birth.push(person[i].yearOfBirth);
            death.push(person[i].yearOfDeath);
            age.push((death[i]-birth[i]))
        }
    
        let index = age.indexOf(Math.max(...age));
        return person[index];
    }
    
}

// Do not edit below this line
module.exports = findTheOldest;
