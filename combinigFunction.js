//function can be used altogether,for ex. one function can call other function.
//this function add 2 numbers
function add2Number(a,b){
    
return a+b;
}
//this funcctions multiply together
function multi2Number(a,b){
    return a*b;
}
console.log(add2Number(300,500));
console.log(multi2Number(3,8));

//combining the two function together


function addAndMultiply(a,b){
    console.log(add2Number(a,b));
console.log(multi2Number(a,b));
}

console.log(addAndMultiply(4,3));