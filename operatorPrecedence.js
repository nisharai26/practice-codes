const example1 = (false || true)&& false;
console.log(example1);
const example2 = true ||(flase && true || false);
console.log(example2);
const example3 = false || !(true && (false || true)) && false;
console.log(example3);