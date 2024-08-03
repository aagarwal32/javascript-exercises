const sumAll = function(...args) {
    let result=0;

    for (let num of args){
        if(num < 0 || !Number.isInteger(num)) {return "ERROR";}
    }

    min = Math.min(...args);
    max = Math.max(...args);
    for(let i=min; i<=max; i++) {result += i;}

    return result;
};

// Do not edit below this line
module.exports = sumAll;
