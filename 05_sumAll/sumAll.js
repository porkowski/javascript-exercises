const sumAll = function(x,y) {
    
    let sum = 0;
    if (x > y) {
    [x,y] = [y,x];    
    }

if (typeof x !== "number" || typeof y !== "number" || x<0 || y<0) {
    sum = "ERROR";
    return sum;
} else {
    for(let i=x+1; i<y; i++){
        sum += i;
    }
    sum += x+y;
    return sum;
}
   };
// Do not edit below this line
module.exports = sumAll;
