const findTheOldest = function(people) {


    const sorted = people.sort((a,b) =>{
    
    //create variable for this year - for those people without
    //a year of death
    let thisYear = new Date().getFullYear();
    
    // Add thisYear to people without year of death
    if (a.yearOfDeath == undefined) {
        a.yearOfDeath = thisYear;
    } else if (b.yearOfDeath == undefined) {
        b.yearOfDeath = thisYear;
    }
    
    //create variables for ages of each person, in order for
    //function to sort them properly
    let ageA = (a.yearOfDeath - a.yearOfBirth );
    let ageB = (b.yearOfDeath - b.yearOfBirth );
        
    
    return ageB - ageA;
    
    
    })
    ;
    
    //Return first object after the array is sorted. 
    //First object will be oldest
    let oldestPerson = sorted[0];
    return oldestPerson;
    ;
    
    };
    
    




// Do not edit below this line
module.exports = findTheOldest;
