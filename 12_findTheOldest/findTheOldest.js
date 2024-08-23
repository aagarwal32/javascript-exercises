const findTheOldest = function(people) {
    let age = 0;
    let oldest_age = 0;
    let oldest_person;
    for (let person of people) {
        if (person.yearOfDeath==undefined) 
            {age = 2024 - person.yearOfBirth;}
        else 
        {age = person.yearOfDeath - person.yearOfBirth;}

        if (age > oldest_age) {
            oldest_age = age;
            oldest_person = person;
        }
    }
    return oldest_person;
};

console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));

// Do not edit below this line
module.exports = findTheOldest;
