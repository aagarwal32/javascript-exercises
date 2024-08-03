const removeFromArray = function(arr, ...elems_to_remove) {
    const newArray = []
    arr.forEach((elem) => {
        if (!elems_to_remove.includes(elem)) {
            newArray.push(elem); 
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
