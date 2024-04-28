let word = "maam";
let char = word.split("");

console.log(char);

let len = char.length;
console.log(char[0]);
console.log(char[len-1]);
if(char[0] == char[len-1]){
    console.log("true");
}
else{
    console.log("Not Same");
}