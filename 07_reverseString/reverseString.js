const reverseString = function(str) {
    let newstr="";
    for(let i=0;i<=str.length;i++){
        newstr+=str.charAt(str.length-i);
    }
    return newstr;
};

// Do not edit below this line
module.exports = reverseString;
