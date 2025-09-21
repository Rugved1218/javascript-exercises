const removeFromArray = function(arr,value) {
    const ind=arr.findIndex(elem => elem==value);
    arr.splice(ind,1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
