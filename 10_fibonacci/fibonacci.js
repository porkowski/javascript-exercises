const fibonacci = function(num) {
    //store array for fibonacci values
    if (num<0) {
        return "OOPS"
    } else {
    
    fib = [0,1];
    
    for (let i=2;i<=num;i++){
    
        fibNum = fib[i-1]+fib[i-2];
        fib.push(fibNum); 
    }
    return fib[num];
    }
}
// Do not edit below this line
module.exports = fibonacci;
