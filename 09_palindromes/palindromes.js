const palindromes = function (str) {
    //No punctuation or spaces
    let str1 = str.toLowerCase().replaceAll(/[\s\!\.\,]/g,'');
    
    let reversed = str1.split('').reverse().join('');
    console.log(str1,reversed);
    
    return str1 == reversed ? true : false;
    
    };




// Do not edit below this line
module.exports = palindromes;
